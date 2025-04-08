import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class MentoriaDto {
  @ApiProperty({ example: 'Mentoria Example', description: 'Name of the mentoria' })
  nome: string;

  @ApiProperty({ example: ['2025-02-01', '2025-03-01'], description: 'Purchase dates', type: [String] })
  datas_compra: string[];

  @ApiProperty({ example: ['user@example.com'], description: 'Emails for exceptions', type: [String] })
  emails_excecao: string[];

  @ApiProperty({ example: [1, 2, 3], description: 'Available plans', type: [Number] })
  planos_disponiveis: number[];

  @ApiProperty({
    example: ['60d5f4842e35f72b9c88f7b4', '60d5f4842e35f72b9c88f7b5'],
    description: 'Array of Sala IDs as strings',
    type: [String],
  })
  salas: string[] | Types.ObjectId[];

  @ApiProperty({ example: true, description: 'Indicates if the mentoria is active' })
  ativo: boolean;
}