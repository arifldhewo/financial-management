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
    @IsOptional()
    bankSource?: string | null;

    @IsString()
    @IsOptional()
    type?: string | null;

    @IsString()
    @IsOptional()
    category?: string | null;

    @IsString()
    @IsOptional()
    acquirer?: string | null;

    @IsEnum(TransactionLedgerStatuses)
    @IsOptional()
    status?: TransactionLedgerStatuses | null;

    @IsNumber()
    @IsOptional()
    amount?: number | null;

    @IsString()
    @IsOptional()
    senderName?: string | null;

    @IsString()
    @IsOptional()
    senderAccount?: string | null;

    @IsString()
    @IsOptional()
    recipientName?: string | null;

    @IsString()
    @IsOptional()
    recipientAccount?: string | null;

    @IsString()
    @IsOptional()
    merchantLocation?: string | null;

    @IsString()
    @IsOptional()
    remarks?: string | null;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    transactionDate?: Date | null;

    @IsString()
    @IsOptional()
    referenceNumber?: string | null;
}
