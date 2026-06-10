import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/database/database.const';
import type { DrizzleDatabase } from 'src/database/database.provider';
import { webhooksTable } from 'src/database/schemas';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';

@Injectable()
export class WebhooksService {
  constructor(
    @Inject(DRIZZLE) private readonly db: DrizzleDatabase
  ) {}

  async create(createWebhookDto: CreateWebhookDto) {
    const [webhook] = await this.db
      .insert(webhooksTable)
      .values(createWebhookDto)
      .returning();

    return webhook;
  }

  findAll() {
    return this.db.select().from(webhooksTable);
  }

  async findOne(id: string) {
    const [webhook] = await this.db
      .select()
      .from(webhooksTable)
      .where(eq(webhooksTable.ID, id));

    return webhook;
  }

  async update(id: string, updateWebhookDto: UpdateWebhookDto) {
    const [webhook] = await this.db
      .update(webhooksTable)
      .set(updateWebhookDto)
      .where(eq(webhooksTable.ID, id))
      .returning();

    return webhook;
  }

  async remove(id: string) {
    const [webhook] = await this.db
      .delete(webhooksTable)
      .where(eq(webhooksTable.ID, id))
      .returning();

    return webhook;
  }
}
