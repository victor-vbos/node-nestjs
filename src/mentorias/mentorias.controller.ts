import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MentoriasService } from './mentorias.service';
import { CreateMentoriaDto } from './dto/create-mentoria.dto';
import { UpdateMentoriaDto } from './dto/update-mentoria.dto';
import { DuplicateMentoriaDto } from './dto/duplicate-mentoria.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { MentoriaDto } from './dto/mentoria.dto';

@Controller('mentorias')
export class MentoriasController {
  constructor(private readonly mentoriasService: MentoriasService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Mentoria created successfully',
    type: CreateMentoriaDto
  })
  create(@Body() createMentoriaDto: CreateMentoriaDto) {
    return this.mentoriasService.create(createMentoriaDto);
  }
  
  @Post('/duplicate')
  @ApiCreatedResponse({
    description: 'Mentoria duplicated successfully',
    type: DuplicateMentoriaDto
  })
  duplicate(@Body() duplicateMentoriaDto: DuplicateMentoriaDto) {
    return this.mentoriasService.duplicate(duplicateMentoriaDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Find mentorias',
    type: [MentoriaDto]
  })
  findAll() {
    return this.mentoriasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Find mentoria',
    type: MentoriaDto
  })
  findOne(@Param('id') id: string) {
    return this.mentoriasService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Update mentoria',
    type: MentoriaDto
  })
  update(@Param('id') id: string, @Body() updateMentoriaDto: UpdateMentoriaDto) {
    return this.mentoriasService.update(id, updateMentoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mentoriasService.remove(id);
  }
}
