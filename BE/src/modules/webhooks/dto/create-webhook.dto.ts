import { IsIn, IsOptional, IsString, IsUrl } from "class-validator";
import { webhooksTable } from "src/database/schemas";

type InsertWebhook = typeof webhooksTable.$inferInsert;

export class CreateWebhookDto implements Pick<
    InsertWebhook,
    "url" | "httpMethod" | "keyHeader" | "keyValue"
> {
    @IsUrl()
    url!: string;

    @IsOptional()
    @IsIn(["POST", "PUT", "PATCH"])
    httpMethod?: "POST" | "PUT" | "PATCH";

    @IsOptional()
    @IsString()
    keyHeader?: string | null;

    @IsOptional()
    @IsString()
    keyValue?: string | null;
}
