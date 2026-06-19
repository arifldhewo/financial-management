import { IsIn, IsOptional, IsString, IsUrl } from "class-validator";
import { webhooksTable } from "src/database/schemas";
import { HttpMethod } from "src/database/schemas.types";

type InsertWebhook = typeof webhooksTable.$inferInsert;

export class CreateWebhookDto implements Pick<
    InsertWebhook,
    "url" | "httpMethod" | "keyHeader" | "keyValue"
> {
    @IsUrl()
    url!: string;

    @IsIn([HttpMethod.GET, HttpMethod.POST])
    httpMethod!: HttpMethod.POST | HttpMethod.GET;

    @IsOptional()
    @IsString()
    keyHeader?: string | null;

    @IsOptional()
    @IsString()
    keyValue?: string | null;
}
