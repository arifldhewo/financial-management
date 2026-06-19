import { TransactionLedgerStatuses } from "src/database/schemas.types";

export class FindAllTransactionsResponseDTO {
    ID!: string;
    emailID!: string | null;
    bankSource!: string | null;
    type!: string | null;
    category!: string | null;
    acquirer!: string | null;
    status!: TransactionLedgerStatuses | null;
    amount!: number | null;
    senderName!: string | null;
    senderAccount!: string | null;
    recipientName!: string | null;
    recipientAccount!: string | null;
    merchantLocation!: string | null;
    remarks!: string | null;
    transactionDate!: string | null;
    referenceNumber!: string | null;
    createdAt!: string | null;
}
