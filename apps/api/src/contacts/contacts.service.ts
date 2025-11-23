import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { WorkflowsService } from '../workflows/workflows.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  private readonly logger = new Logger(ContactsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly workflowsService: WorkflowsService,
  ) {}

  private get db() {
    // Casting to a loose shape until Prisma Client types are generated during install.
    return this.prisma as unknown as Record<string, any>;
  }

  async create(payload: CreateContactDto) {
    const { tags = [], ...contactData } = payload;

    const contact = await this.db.contact.create({
      data: {
        ...contactData,
        tags: {
          create: tags.map((name: string) => ({
            tag: {
              connectOrCreate: {
                where: { name },
                create: { name },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    try {
      await this.workflowsService.scheduleFiveDaysOfJoy(contact.id);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown error';
      this.logger.warn(`Failed to enqueue Five Days of Joy workflow for ${contact.id}: ${message}`);
    }

    return contact;
  }

  findAll() {
    return this.db.contact.findMany({
      include: {
        tags: {
          include: { tag: true },
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 5,
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async findOne(id: string) {
    const contact = await this.db.contact.findUnique({
      where: { id },
      include: {
        tags: {
          include: { tag: true },
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
        timeline: {
          orderBy: { occurredAt: 'desc' },
          take: 20,
        },
        complianceEvents: {
          orderBy: { occurredAt: 'desc' },
          take: 20,
        },
      },
    });

    if (!contact) {
      throw new NotFoundException(`Contact ${id} not found`);
    }

    return contact;
  }

  async update(id: string, payload: UpdateContactDto) {
    const { tags, ...contactData } = payload;

    const contact = await this.db.contact.findUnique({ where: { id } });
    if (!contact) {
      throw new NotFoundException(`Contact ${id} not found`);
    }

    return this.db.contact.update({
      where: { id },
      data: {
        ...contactData,
        ...(tags && {
          tags: {
            deleteMany: {},
            create: tags.map((name: string) => ({
              tag: {
                connectOrCreate: {
                  where: { name },
                  create: { name },
                },
              },
            })),
          },
        }),
      },
      include: {
        tags: {
          include: { tag: true },
        },
      },
    });
  }

  async remove(id: string) {
    const exists = await this.db.contact.count({ where: { id } });
    if (!exists) {
      throw new NotFoundException(`Contact ${id} not found`);
    }

    return this.db.contact.delete({ where: { id } });
  }
}
