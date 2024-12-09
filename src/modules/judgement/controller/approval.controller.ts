import { Controller, Inject } from '@nestjs/common';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { CreateApprovalDto } from '../dto/create-approval.dto';
import { UpdateApprovalDto } from '../dto/update-approval.dto';
import { Approval } from '../entities/approval.entity';
import { ApprovalService } from '../service/approval.service';

@Controller('approval')
@OperationsDtos({ create: CreateApprovalDto, update: UpdateApprovalDto })
export class ApprovalController extends OperationsController<
  Approval,
  CreateApprovalDto
> {
  @Inject(ApprovalService)
  service: ApprovalService;
}
