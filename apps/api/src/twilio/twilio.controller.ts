import { Body, Controller, Headers, Post } from '@nestjs/common';

@Controller('twilio')
export class TwilioController {
  // TODO: validate x-twilio-signature headers and process inbound events.
  @Post('webhook')
  handleWebhook(@Body() payload: Record<string, unknown>, @Headers('x-twilio-signature') signature?: string) {
    return {
      received: payload,
      signature,
    };
  }
}
