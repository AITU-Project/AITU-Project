import { IsString, IsBoolean, IsDateString, IsUUID } from 'class-validator';

export class CreateConclusionDto {
  @IsUUID()
  createdBy: string;

  @IsDateString()
  registrationDate: string;

  @IsString()
  position: string;

  @IsString()
  region: string;

  @IsString()
  plannedActions: string;

  @IsDateString()
  eventDate: string;

  @IsString()
  eventPlace: string;

  @IsString()
  investigator: string;

  @IsString()
  status: string;

  @IsString()
  eventRelation: string;

  @IsString()
  investigationType: string;

  @IsBoolean()
  isBusinessRelated: boolean;

  @IsString()
  justification: string;

  @IsString()
  actionResult: string;
}
