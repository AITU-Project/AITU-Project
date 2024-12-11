import { Controller, Inject } from '@nestjs/common';

import { OperationsController } from '../../../common/operations/controller/operations.controller';
import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { Employee } from '../entities/employee.entity';
import { EmployeeService } from '../service/employee.service';

@Controller('employees')
@OperationsDtos({ create: CreateEmployeeDto, update: UpdateEmployeeDto })
export class EmploeeController extends OperationsController<
  Employee,
  CreateEmployeeDto
> {
  @Inject(EmployeeService)
  service: EmployeeService;
}
