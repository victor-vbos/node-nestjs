import { PartialType } from '@nestjs/swagger';
import { CreateMentoriaDto } from './create-mentoria.dto';

export class UpdateMentoriaDto extends PartialType(CreateMentoriaDto) {}
