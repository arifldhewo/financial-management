import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
    ParseDatePipe,
} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { FindAllQueryDto } from "./dto/find-all-query.dto";

@Controller("transactions")
export class TransactionsController {
    constructor(private readonly transactionsService: TransactionsService) {}

    @Post()
    create(@Body() createTransactionDto: CreateTransactionDto) {
        return this.transactionsService.create(createTransactionDto);
    }

    @Get()
    async findAll(@Query("query") query: FindAllQueryDto) {
        const result = await this.transactionsService.findAll(query);

        return {
            data: result,
        };
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.transactionsService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
        return this.transactionsService.update(+id, updateTransactionDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.transactionsService.remove(+id);
    }
}
