import { IsString, IsBoolean, IsDateString } from 'class-validator';

export class CreateConclusionDto {
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
