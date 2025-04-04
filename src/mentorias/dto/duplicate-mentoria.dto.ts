import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class DuplicateMentoriaDto {
  @ApiProperty({ example: '67e31a10b125b5b0913c62eb', description: 'Id to duplicate the mentoria' })
  id: string;
}
