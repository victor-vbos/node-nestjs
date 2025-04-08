import { ApiProperty } from "@nestjs/swagger";

export class ProfessorDto {
  @ApiProperty({ example: 101, description: 'Unique identifier for the professor' })
  id: number;

  @ApiProperty({ example: 'Professor teste', description: 'Name of the professor' })
  nome: string;
}

export class CoachDto {
    @ApiProperty({ example: 101, description: 'Unique identifier for the coach' })
    id: number;
  
    @ApiProperty({ example: 'Coach teste', description: 'Name of the coach' })
    nome: string;
  }