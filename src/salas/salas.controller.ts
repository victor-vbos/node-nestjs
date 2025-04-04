import { Controller, Get, Post, Body, Patch, Param, Delete, Query, InternalServerErrorException } from '@nestjs/common';
import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { FilterEventsDto } from './dto/filter-sala.dto';
import { Sala } from './schemas/sala.schema';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { SalaDto } from './dto/sala.dto';

@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Sala created successfully',
    type: CreateSalaDto
  })
  async create(@Body() createSalaDto: CreateSalaDto) {
    return this.salasService.create(createSalaDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Find salas',
    type: [SalaDto]
  })
  async findAll(@Query() filters: FilterEventsDto): Promise<SalaDto[]> {
    return this.salasService.findAll(filters);
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto) {
    console.log(updateSalaDto)
    return this.salasService.update(id, updateSalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salasService.remove(id);
  }
}
