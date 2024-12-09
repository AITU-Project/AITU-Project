import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GuardianService } from '../../common/guardian';
import { PaginationService } from '../../common/pagination';
import { ValidationService } from '../../common/validation';

import { ApprovalController } from './controller/approval.controller';
import { CalledController } from './controller/called.controller';
import { ConclusionController } from './controller/conclusion.controller';
import { DefenderController } from './controller/defender.controller';
import { IncidentController } from './controller/incident.controller';
import { JudgementEntities } from './entities';
import { ApprovalService } from './service/approval.service';
import { CalledService } from './service/called.service';
import { ConclusionService } from './service/conclusion.service';
import { DefenderService } from './service/defender.service';
import { IncidentService } from './service/incident.service';

const providers = [
  ApprovalService,
  CalledService,
  ConclusionService,
  DefenderService,
  IncidentService,
];

@Module({
  imports: [TypeOrmModule.forFeature(JudgementEntities)],
  controllers: [
    ApprovalController,
    CalledController,
    ConclusionController,
    DefenderController,
    IncidentController,
  ],
  providers: [
    ...providers,
    PaginationService,
    ValidationService,
    GuardianService,
  ],
  exports: providers,
})
export class JudgementModule {}
