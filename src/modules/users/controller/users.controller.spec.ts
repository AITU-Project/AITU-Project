import { OperationsControllerTestsFactory } from '../../../common/operations/controller/operations.controller.tests';
import { UsersService } from '../service/users.service';

import { UsersController } from './users.controller';

OperationsControllerTestsFactory(UsersController, UsersService);
