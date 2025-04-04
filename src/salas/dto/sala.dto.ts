import { ApiProperty } from '@nestjs/swagger';

export class SalaDto {
  @ApiProperty({ example: 'sdasdsad', description: 'id of the sala' })
  _id: string;
  
  @ApiProperty({ example: 'Event X', description: 'Name of the sala' })
  nome: string;

  @ApiProperty({ example: true, description: 'Indicates if the sala is active' })
  ativo: boolean;

  @ApiProperty({ example: false, description: 'Indicates if the sala is mentorship', required: false, nullable: true })
  is_mentoria?: boolean | null;

  @ApiProperty({ example: 123, description: 'Video id', required: false, nullable: true })
  video?: number | null;

  @ApiProperty({ example: '2025-03-01T09:00:00Z', description: 'Start date and time of the event' })
  data_inicio: string;

  @ApiProperty({ example: '2025-03-01T11:00:00Z', description: 'Expiration date and time of the event' })
  data_expiracao: string;

  @ApiProperty({ example: '2025-02-24T08:00:00Z', description: 'Creation timestamp' })
  criado_em: string;

  @ApiProperty({ example: '2025-02-24T09:00:00Z', description: 'Last update timestamp' })
  atualizado_em: string;

  @ApiProperty({ example: [{id: 101, nome: 'Professor teste'}, {id: 102, nome: 'Professor teste 2'}], description: 'Array of professor' })
  professores: Array<any>;

  @ApiProperty({ example: [{id: 101, nome: 'Coach teste'}, {id: 102, nome: 'Coach teste 2'}], description: 'Array of coach' })
  coaches: Array<any>;

  @ApiProperty({ example: 'https://example.com/event-1', description: 'URL associated with the event' })
  url: string;
}
