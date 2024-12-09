import { MailerModule } from '../common/mailer';
import { RedisModule } from '../common/redis';

import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { JudgementEntities } from './judgement/entities';
import { JudgementModule } from './judgement/judgement.module';
import { UserEntities } from './users/entities';
import { UsersModule } from './users/users.module';

export const entities = [...UserEntities, ...JudgementEntities];

export const modules = [
  UsersModule,
  JudgementModule,
  AuthModule,
  DocumentsModule,
  RedisModule,
  MailerModule,
];
