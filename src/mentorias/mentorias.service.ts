import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Mentoria, MentoriaDocument } from './schemas/mentoria.schema';
import { CreateMentoriaDto } from './dto/create-mentoria.dto';
import { UpdateMentoriaDto } from './dto/update-mentoria.dto';

@Injectable()
export class MentoriasService {
  constructor(
    @InjectModel(Mentoria.name)
    private readonly mentoriaModel: Model<MentoriaDocument>,
  ) {}

  async create(createMentoriaDto: CreateMentoriaDto): Promise<Mentoria> {
    const salasObjectIds = createMentoriaDto.salas.map((id) => new Types.ObjectId(id));
    const createdMentoria = new this.mentoriaModel({
      ...createMentoriaDto,
      salas: salasObjectIds,
    });
    return createdMentoria.save();
  }

  async findAll(): Promise<Mentoria[]> {
    return this.mentoriaModel.find().exec();
  }

  async findOne(id: string): Promise<Mentoria> {
    const mentoria = await this.mentoriaModel.findById(id).exec();
    if (!mentoria) {
      throw new NotFoundException(`Mentoria with id ${id} not found`);
    }
    return mentoria;
  }

  async update(id: string, updateMentoriaDto: UpdateMentoriaDto): Promise<Mentoria> {
    if (updateMentoriaDto.salas) {
      updateMentoriaDto.salas = updateMentoriaDto.salas.map((salaId) => new Types.ObjectId(salaId));
    }
    const updatedMentoria = await this.mentoriaModel.findByIdAndUpdate(id, updateMentoriaDto, {
      new: true,
    }).exec();
    if (!updatedMentoria) {
      throw new NotFoundException(`Mentoria with id ${id} not found`);
    }
    return updatedMentoria;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deletedMentoria = await this.mentoriaModel.findByIdAndDelete(id).exec();
    if (!deletedMentoria) {
      throw new NotFoundException(`Mentoria with id ${id} not found`);
    }
    return { message: 'Mentoria deleted successfully' };
  }
}
