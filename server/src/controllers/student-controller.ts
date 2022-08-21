import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.student.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req: Request, res: Response) => {
  const { nim, name, email, major } = req.body;

  try {
    const data = await prisma.student.create({
      data: {
        nim: String(nim),
        name: String(name),
        email: String(email),
        major: String(major),
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
    const data = await prisma.student.findUnique({
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
  const { nim, name, email, major } = req.body;

  try {
    const data = await prisma.student.update({
      where: {
        id: String(id),
      },
      data: {
        nim: String(nim),
        name: String(name),
        email: String(email),
        major: String(major),
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
    const data = await prisma.student.delete({
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
