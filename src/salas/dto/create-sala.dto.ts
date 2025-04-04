import { OmitType } from '@nestjs/swagger';
import { SalaDto } from './sala.dto';

export class CreateSalaDto extends OmitType(SalaDto, ['_id'] as const) {}
