import { Injectable } from '@nestjs/common';
import { Column } from 'nestjs-paginate/lib/helper';
import { FindOptionsRelations } from 'typeorm';

import { OperationsDtos } from '../../../common/operations/decorators/operations.dtos.decorator';
import { OperationsEntity } from '../../../common/operations/decorators/operations.entity.decorator';
import { OperationsService } from '../../../common/operations/service/operations.service';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { Employee } from '../entities/employee.entity';

@Injectable()
@OperationsEntity({ entity: Employee })
@OperationsDtos({ create: CreateEmployeeDto, update: UpdateEmployeeDto })
export class EmployeeService extends OperationsService<
  Employee,
  CreateEmployeeDto
> {
  sortableColumns = [
    'id',
    'user',
    'iin',
    'workplace',
    'conclusions',
  ] as Column<Employee>[];

  relations = ['user', 'conclusions'] as FindOptionsRelations<Employee>;

  getEmployeeFromUserId(id: string) {
    return this.repository.findOne({
      where: { user: { id } },
      relations: ['user', 'conclusions'],
    });
  }
}
