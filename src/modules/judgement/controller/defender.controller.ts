import { Controller, Inject } from '@nestjs/common';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { CreateDefenderDto } from '../dto/create-defender.dto';
import { UpdateDefenderDto } from '../dto/update-defender.dto';
import { Defender } from '../entities/defender.entity';
import { DefenderService } from '../service/defender.service';

@Controller('defenders')
@OperationsDtos({ create: CreateDefenderDto, update: UpdateDefenderDto })
export class DefenderController extends OperationsController<
  Defender,
  CreateDefenderDto
> {
  @Inject(DefenderService)
  service: DefenderService;
}
