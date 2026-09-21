import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
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

  async findById(id: string): Promise<BudgetEntity | null> {
    return this.repository.findOneBy({ id });
  }

  async findAllByUser(userId: string): Promise<BudgetEntity[]> {
    return this.repository.find({ where: { userId } });
  }

  async findByUserCategoryMonthYear(
    userId: string,
    categoryId: string | null,
    month: number,
    year: number,
  ): Promise<BudgetEntity | null> {
    return this.repository.findOne({
      where: {
        userId,
        categoryId: categoryId ?? IsNull(),
        month,
        year,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}