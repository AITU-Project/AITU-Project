import { Controller, Inject } from '@nestjs/common';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { CreateCalledDto } from '../dto/create-called.dto';
import { UpdateCalledDto } from '../dto/update-called.dto';
import { Called } from '../entities/called.entity';
import { CalledService } from '../service/called.service';

@Controller('called')
@OperationsDtos({ create: CreateCalledDto, update: UpdateCalledDto })
export class CalledController extends OperationsController<
  Called,
  CreateCalledDto
> {
  @Inject(CalledService)
  service: CalledService;
}
