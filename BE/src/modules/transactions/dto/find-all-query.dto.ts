import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { TransactionLedgerStatuses } from "src/database/schemas.types";

export class FindAllQueryDto {
    @IsOptional()
    @IsString()
    emailID?: string;

    @IsOptional()
    @IsString()
    bankSource?: string;

    @IsOptional()
    @IsString()
    type?: string;

    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @IsEnum(TransactionLedgerStatuses)
    status?: TransactionLedgerStatuses;

    @IsOptional()
    @IsDateString()
    startTime?: string;

    @IsOptional()
    @IsDateString()
    endTime?: string;
}
