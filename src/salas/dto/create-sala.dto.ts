import { OmitType } from '@nestjs/swagger';
import { SalaDto } from './sala.dto';

export class CreateSalaDto extends OmitType(SalaDto, ['_id', 'atualizado_em', 'criado_em'] as const) {}
