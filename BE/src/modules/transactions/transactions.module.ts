import { Module } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";
import { DBModule } from "src/database/database.module";

@Module({
    controllers: [TransactionsController],
    providers: [TransactionsService],
    imports: [DBModule],
})
export class TransactionsModule {}
