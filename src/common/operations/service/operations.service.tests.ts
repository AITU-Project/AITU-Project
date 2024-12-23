import { Type } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DataSource, Repository } from 'typeorm';

import { DataSourceMockFactory } from '../../../../test/utils/data-source.mock';
import { PaginationServiceMockFactory } from '../../../../test/utils/pagination.mock';
import { PaginationService } from '../../pagination';
import { OperationsService } from '../service/operations.service';

export const OperationsServiceTestsFactory = <T extends Type>(
  entity: T,
  ServiceClass: Type<OperationsService<InstanceType<T>, never>>,
) => {
  describe(`${ServiceClass.name}`, () => {
    let service: OperationsService<T, never>;
    let pagination: PaginationService;
    let repository: Repository<T>;
    let dataSource: DataSource;

    beforeAll(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        providers: [
          ServiceClass,
          {
            provide: DataSource,
            useFactory: DataSourceMockFactory,
          },
          {
            provide: PaginationService,
            useFactory: PaginationServiceMockFactory,
          },
        ],
      }).compile();

      pagination = moduleFixture.get(PaginationService);
      dataSource = moduleFixture.get(DataSource);
      service = moduleFixture.get(ServiceClass);
      service.onModuleInit();
    });

    beforeEach(() => {
      repository = dataSource.getRepository(entity as CallableFunction);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should call repository.save when creating an entity', async () => {
      await service.create({} as never);
      expect(repository.save).toHaveBeenCalled();
    });

    it('should call repository.find when retrieving entities', async () => {
      await service.findAll({} as never);
      expect(pagination.paginate).toHaveBeenCalled();
    });

    it('should call repository.findOne when retrieving an entity', async () => {
      await service.findOne('');
      expect(repository.findOne).toHaveBeenCalled();
    });

    it('should call repository.update when updating an entity', async () => {
      await service.update('', {} as never);
      expect(repository.update).toHaveBeenCalled();
    });

    it('should call repository.delete when removing an entity', async () => {
      await service.remove('');
      expect(repository.delete).toHaveBeenCalled();
    });
  });
};
