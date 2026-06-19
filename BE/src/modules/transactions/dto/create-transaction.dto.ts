import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { transactionLedgersTable } from "src/database/schemas";
import { TransactionLedgerStatuses } from "src/database/schemas.types";

type CreateTransactions = typeof transactionLedgersTable.$inferInsert;

export class CreateTransactionDto implements Pick<
    CreateTransactions,
    | "acquirer"
    | "amount"
    | "bankSource"
    | "category"
    | "emailMessageID"
    | "merchantLocation"
    | "senderName"
    | "senderAccount"
    | "recipientName"
    | "recipientAccount"
    | "referenceNumber"
    | "remarks"
    | "status"
    | "transactionDate"
    | "type"
> {
    @IsString()
    emailMessageID!: string;

    @IsString()
    bankSource!: string;

    @IsString()
    type!: string;

    @IsString()
    category!: string;

    @IsString()
    @IsOptional()
    acquirer?: string;

    @IsEnum(TransactionLedgerStatuses)
    status!: TransactionLedgerStatuses;

    @IsNumber()
    amount!: number;

    @IsString()
    senderName!: string;

    @IsString()
    @IsOptional()
    senderAccount?: string;

    @IsString()
    recipientName!: string;

    @IsString()
    @IsOptional()
    recipientAccount?: string;

    @IsString()
    @IsOptional()
    merchantLocation?: string;

    @IsString()
    @IsOptional()
    remarks?: string;

    @Type(() => Date)
    @IsDate()
    transactionDate!: Date;

    @IsOptional()
    @IsString()
    referenceNumber!: string;
}
