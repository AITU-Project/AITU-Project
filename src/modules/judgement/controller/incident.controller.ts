import { Controller, Inject } from '@nestjs/common';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { CreateIncidentDto } from '../dto/create-incident.dto';
import { UpdateIncidentDto } from '../dto/update-incident.dto';
import { Incident } from '../entities/incident.entity';
import { IncidentService } from '../service/incident.service';

@Controller('incidents')
@OperationsDtos({ create: CreateIncidentDto, update: UpdateIncidentDto })
export class IncidentController extends OperationsController<
  Incident,
  CreateIncidentDto
> {
  @Inject(IncidentService)
  service: IncidentService;
}
