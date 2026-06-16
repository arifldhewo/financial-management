import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppConfigModule } from "./config/config.module";
import { WebhooksModule } from "./modules/webhooks/webhooks.module";
import { TransactionCategoriesModule } from "./modules/transaction-categories/transaction-categories.module";
import { TransactionsModule } from "./modules/transactions/transactions.module";

@Module({
    imports: [AppConfigModule, WebhooksModule, TransactionCategoriesModule, TransactionsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
