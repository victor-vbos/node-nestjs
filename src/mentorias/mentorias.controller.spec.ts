import { Test, TestingModule } from '@nestjs/testing';
import { MentoriasController } from './mentorias.controller';
import { MentoriasService } from './mentorias.service';

describe('MentoriasController', () => {
  let controller: MentoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentoriasController],
      providers: [MentoriasService],
    }).compile();

    controller = module.get<MentoriasController>(MentoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
