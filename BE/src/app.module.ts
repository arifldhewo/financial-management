import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppConfigModule } from "./config/config.module";
import { WebhooksModule } from './modules/webhooks/webhooks.module';

@Module({
    imports: [AppConfigModule, WebhooksModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
