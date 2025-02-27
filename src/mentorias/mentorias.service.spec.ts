import { Test, TestingModule } from '@nestjs/testing';
import { MentoriasService } from './mentorias.service';

describe('MentoriasService', () => {
  let service: MentoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentoriasService],
    }).compile();

    service = module.get<MentoriasService>(MentoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
