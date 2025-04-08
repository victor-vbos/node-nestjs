import { OmitType, PartialType } from '@nestjs/swagger';
import { SalaDto } from './sala.dto';

export class GetSalaDto extends PartialType(SalaDto) {}
