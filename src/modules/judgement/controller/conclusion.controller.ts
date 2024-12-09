import { Controller, Inject } from '@nestjs/common';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
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
}
