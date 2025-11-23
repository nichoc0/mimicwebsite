import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

export interface SendSmsPayload {
  to: string;
  body: string;
  mediaUrl?: string;
}

@Injectable()
export class TwilioService {
  private readonly logger = new Logger(TwilioService.name);
  private client?: Twilio;
  private readonly messagingServiceSid: string;
  private readonly callerId?: string;

  constructor(private readonly configService: ConfigService) {
    this.messagingServiceSid = this.configService.get<string>('TWILIO_MESSAGING_SERVICE_SID', '');
    this.callerId = this.configService.get<string>('TWILIO_CALLER_ID');
  }

  async sendSms(payload: SendSmsPayload) {
    const { to, body, mediaUrl } = payload;

    this.logger.debug(`Sending SMS to ${to}`);

    const client = this.getClient();

    return client.messages.create({
      to,
      from: this.messagingServiceSid ? undefined : this.callerId,
      messagingServiceSid: this.messagingServiceSid || undefined,
      body,
      mediaUrl: mediaUrl ? [mediaUrl] : undefined,
    });
  }

  private getClient() {
    if (!this.client) {
      const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
      const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');

      if (!accountSid || !authToken) {
        throw new Error('Twilio credentials are not configured');
      }

      this.client = new Twilio(accountSid, authToken);
    }

    return this.client;
  }
}
