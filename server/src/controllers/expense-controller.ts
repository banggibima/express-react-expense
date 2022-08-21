import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.expense.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req: Request, res: Response) => {
  const { student, name, category, date, quantity, amount } = req.body;

  try {
    const data = await prisma.expense.create({
      data: {
        student: String(student),
        name: String(name),
        category: String(category),
        date: String(date),
        quantity: Number(quantity),
        amount: Number(amount),
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.expense.findUnique({
      where: {
        id: String(id),
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { student, name, category, date, quantity, amount } = req.body;

  try {
    const data = await prisma.expense.update({
      where: {
        id: String(id),
      },
      data: {
        student: String(student),
        name: String(name),
        category: String(category),
        date: String(date),
        quantity: Number(quantity),
        amount: Number(amount),
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.expense.delete({
      where: {
        id: String(id),
      },
    });
    res.status(204).json(data);
  } catch (err) {
    console.error(err);
  }
};

export { index, create, show, update, destroy };
