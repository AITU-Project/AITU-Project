import { Controller, Get, Inject, UseGuards, Request } from '@nestjs/common';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { CreateConclusionDto } from '../dto/create-conclusion.dto';
import { UpdateConclusionDto } from '../dto/update-conclusion.dto';
import { Conclusion } from '../entities/conclusion.entity';
import { ConclusionService } from '../service/conclusion.service';

@Controller('conclusions')
@OperationsDtos({ create: CreateConclusionDto, update: UpdateConclusionDto })
export class ConclusionController extends OperationsController<
  Conclusion,
  CreateConclusionDto
> {
  @Inject(ConclusionService)
  service: ConclusionService;

  @Get()
  @UseGuards(AuthGuard)
  findAllFiltered(
    @Request() request: any,
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<Conclusion>> {
    return this.service.findAllFiltered(query, request.user);
  }
}
