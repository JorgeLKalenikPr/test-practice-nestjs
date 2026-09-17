import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BudgetEntity } from '../models/entity/budget.entity';
import { IBudgetRepository } from './budget-repository.interface';

@Injectable()
export class BudgetTypeOrmRepository implements IBudgetRepository {
  constructor(
    @InjectRepository(BudgetEntity)
    private readonly repository: Repository<BudgetEntity>,
  ) {}

  async create(budget: Partial<BudgetEntity>): Promise<BudgetEntity> {
    return this.repository.create(budget);
  }

  async save(budget: BudgetEntity): Promise<BudgetEntity> {
    return this.repository.save(budget);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}