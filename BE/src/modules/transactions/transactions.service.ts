import { Inject, Injectable } from "@nestjs/common";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { DRIZZLE } from "src/database/database.const";
import type { DrizzleDatabase } from "src/database/database.provider";
import { transactionLedgersTable } from "src/database/schemas";
import { FindAllQueryDto } from "./dto/find-all-query.dto";
import { extractMultiQueryParams } from "src/helper/dto.helper";
import { and, between, inArray, or, SQLWrapper } from "drizzle-orm";
import { QuerySeparator } from "../../model/enum/separator.enum";
import { FindAllTransactionsResponseDTO } from "./dto/find-all-response.dto";

@Injectable()
export class TransactionsService {
    constructor(@Inject(DRIZZLE) private readonly db: DrizzleDatabase) {}

    async create(createTransactionDto: CreateTransactionDto): Promise<CreateTransactionDto> {
        return this.db.transaction(async (tx) => {
            const [rows] = await tx
                .insert(transactionLedgersTable)
                .values(createTransactionDto)
                .onConflictDoNothing()
                .returning();

            return {
                ...rows,
            };
        });
    }

    async findAll(query: FindAllQueryDto): Promise<FindAllTransactionsResponseDTO[]> {
        let { emailID, bankSource, category, status, startTime, endTime, type } = query;

        let whereBuilder = [];

        if (emailID) {
            whereBuilder.push(
                inArray(
                    transactionLedgersTable.emailMessageID,
                    extractMultiQueryParams(emailID, QuerySeparator.COMMA),
                ),
            );
        }

        if (bankSource) {
            whereBuilder.push(
                inArray(
                    transactionLedgersTable.bankSource,
                    extractMultiQueryParams(bankSource, QuerySeparator.COMMA),
                ),
            );
        }

        if (category) {
            whereBuilder.push(
                inArray(
                    transactionLedgersTable.category,
                    extractMultiQueryParams(category, QuerySeparator.COMMA),
                ),
            );
        }

        if (status) {
            whereBuilder.push(
                inArray(
                    transactionLedgersTable.category,
                    extractMultiQueryParams(status, QuerySeparator.COMMA),
                ),
            );
        }

        if (type) {
            whereBuilder.push(
                inArray(
                    transactionLedgersTable.category,
                    extractMultiQueryParams(type, QuerySeparator.COMMA),
                ),
            );
        }

        if (startTime && endTime) {
            whereBuilder.push(
                between(
                    transactionLedgersTable.transactionDate,
                    new Date(startTime),
                    new Date(endTime),
                ),
            );
        }

        const rows = await this.db.transaction(
            async (tx) =>
                await tx
                    .select({
                        ID: transactionLedgersTable.ID,
                        emailID: transactionLedgersTable.emailMessageID,
                        bankSource: transactionLedgersTable.bankSource,
                        type: transactionLedgersTable.type,
                        category: transactionLedgersTable.category,
                        acquirer: transactionLedgersTable.acquirer,
                        status: transactionLedgersTable.status,
                        amount: transactionLedgersTable.amount,
                        senderName: transactionLedgersTable.senderName,
                        senderAccount: transactionLedgersTable.senderAccount,
                        recipientName: transactionLedgersTable.recipientName,
                        recipientAccount: transactionLedgersTable.recipientAccount,
                        merchantLocation: transactionLedgersTable.merchantLocation,
                        remarks: transactionLedgersTable.remarks,
                        transactionDate: transactionLedgersTable.transactionDate,
                        referenceNumber: transactionLedgersTable.referenceNumber,
                        createdAt: transactionLedgersTable.createdAt,
                    })
                    .from(transactionLedgersTable)
                    .where(whereBuilder.length ? and(...whereBuilder) : undefined),
        );

        if (!rows.length) return [];

        return rows.map((row) => ({
            ...row,
            transactionDate: row.transactionDate ? row.transactionDate.toISOString() : null,
            createdAt: row.createdAt.toISOString(),
        }));
    }

    async findOne(id: number) {
        return `This action returns a #${id} transaction`;
    }

    async update(id: number, updateTransactionDto: UpdateTransactionDto) {
        return `This action updates a #${id} transaction`;
    }

    async remove(id: number) {
        return `This action removes a #${id} transaction`;
    }
}
