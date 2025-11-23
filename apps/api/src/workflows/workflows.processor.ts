import { Inject, Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { Job, Worker } from 'bullmq';
import Redis from 'ioredis';
import { WORKFLOW_QUEUE_NAME, WORKFLOW_REDIS_TOKEN } from './workflows.constants';
import { WorkflowQueueData } from './workflows.service';

@Injectable()
export class WorkflowsProcessor implements OnModuleDestroy {
  private readonly logger = new Logger(WorkflowsProcessor.name);
  private readonly worker: Worker<WorkflowQueueData>;
  private readonly connection: Redis;

  constructor(@Inject(WORKFLOW_REDIS_TOKEN) connection: Redis) {
    this.connection = connection;
    this.worker = new Worker<WorkflowQueueData>(
      WORKFLOW_QUEUE_NAME,
      (job: Job<WorkflowQueueData>) => this.handleJob(job),
      {
        connection,
      },
    );

    this.worker.on('completed', (job: Job<WorkflowQueueData>) => {
      this.logger.debug(`Workflow job ${job.id} completed`);
    });

    this.worker.on('failed', (job: Job<WorkflowQueueData> | undefined, error: Error) => {
      this.logger.error(`Workflow job ${job?.id ?? 'unknown'} failed`, error.stack);
    });
  }

  private async handleJob(job: Job<WorkflowQueueData>) {
    const { type, payload } = job.data;
    this.logger.log(`Processing workflow job ${job.id} of type ${type}`);

    switch (type) {
      case 'FIVE_DAYS_OF_JOY':
        // TODO: Implement actual workflow execution chain.
        break;
      case 'BIRTHDAY_VIDEO':
        // TODO: Implement birthday video sending logic.
        break;
      case 'SEND_VIDEO':
        // TODO: Implement manual video sending logic.
        break;
      default:
        this.logger.warn(`Unhandled workflow job type: ${type}`);
    }
  }

  async onModuleDestroy() {
    await this.worker.close();
    if (typeof this.connection.quit === 'function') {
      await this.connection.quit();
    }
  }
}
