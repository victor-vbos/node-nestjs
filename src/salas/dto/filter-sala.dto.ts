import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterEventsDto {
  @ApiPropertyOptional({
    example: '2025-01-31T00:00:00Z',
    description: 'Start date for data_inicio filter',
  })
  data_inicio?: string;

  @ApiPropertyOptional({
    example: '2025-05-01T23:59:59Z',
    description: 'End date for data_expiracao filter',
  })
  data_expiracao?: string;

  @ApiPropertyOptional({
    example: 'Event 2',
    description: 'Filter for event name (nome)',
  })
  nome?: string;

  @ApiPropertyOptional({
    example: 'professor 1',
    description: 'Filter for professor name',
  })
  professor?: string;

  @ApiPropertyOptional({
    example: 'coach 1',
    description: 'Filter for coach name',
  })
  coach?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Filter for ativo field',
  })
  ativo?: boolean;

  @ApiPropertyOptional({
    example: true,
    description: 'Filter for is_mentoria field',
  })
  is_mentoria?: boolean;
}
