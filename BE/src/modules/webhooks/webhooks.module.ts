import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { WebhooksController } from './webhooks.controller';
import { DBModule } from 'src/database/database.module';

@Module({
  controllers: [WebhooksController],
  providers: [WebhooksService],
  imports: [DBModule],
})
export class WebhooksModule {}
