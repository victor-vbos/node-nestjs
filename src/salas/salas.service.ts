import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sala, SalaDocument } from './schemas/sala.schema';

@Injectable()
export class SalasService {
  constructor(@InjectModel(Sala.name) private readonly salaModel: Model<SalaDocument>) {}


  async create(createSalaDto: CreateSalaDto): Promise<Sala> {
    const createdSala = new this.salaModel(createSalaDto);
    return createdSala.save();
  }

  async findAll(filters: {
    data_inicio?: string;
    data_expiracao?: string;
    nome?: string;
    professor?: string;
    coach?: string;
    ativo?: boolean;
    is_mentoria?: boolean;
  }): Promise<Sala[]> {
    const query: any = {};

    if (filters.data_inicio || filters.data_expiracao) {
      query.data_inicio = {};
      if (filters.data_inicio) {
        query.data_inicio.$gte = new Date(filters.data_inicio);
      }
      if (filters.data_expiracao) {
        query.data_inicio.$lte = new Date(filters.data_expiracao);
      }
    }

    if (filters.nome) {
      query.nome = { $regex: filters.nome, $options: 'i' };
    }

    if (filters.professor || filters.coach) {
      query.$or = [];
      if (filters.professor) {
        query.$or.push({ "professores.nome": { $regex: filters.professor, $options: 'i' } });
      }
      if (filters.coach) {
        query.$or.push({ "coaches.nome": { $regex: filters.coach, $options: 'i' } });
      }
    }

    if (filters.ativo !== undefined) {
      query.ativo = filters.ativo;
    }
    if (filters.is_mentoria !== undefined) {
      query.is_mentoria = filters.is_mentoria;
    }

    return await this.salaModel.find(query).exec();
  }

  async findOne(id: string) {
    const sala = await this.salaModel.findById(id).exec();
    if (!sala) {
      throw new NotFoundException(`Sala with id ${id} not found`);
    }
    return sala;
  }

  async update(id: string, updateSalaDto: UpdateSalaDto) {
    const updatedSala = await this.salaModel.findByIdAndUpdate(id, updateSalaDto, { new: true }).exec();
    if (!updatedSala) {
      throw new NotFoundException(`Sala with id ${id} not found`);
    }
    return updatedSala;
  }

  async remove(id: string): Promise<any> {
    const deletedSala = await this.salaModel.findByIdAndDelete(id).exec();
    if (!deletedSala) {
      throw new NotFoundException(`Sala with id ${id} not found`);
    }
    
    return { message: 'Sala deleted successfully' };
  }
}

