import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Customer } from '../../entity/Customer';
import { customerSchema } from './schema';

export const getAllCustomer = async (req: Request, res: Response) => {

  const allCustomers = getManager()
    .getRepository(Customer)
    .createQueryBuilder('customer')
    .getMany()

  res.send(allCustomers);
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const value = await customerSchema.validateAsync(req.body);
    console.log(value)
    await getManager()
      .createQueryBuilder()
      .insert()
      .into(Customer)
      .values(value)
      .execute()
    res.sendStatus(200).send("Create customer success");
  }
  catch (error) {
    res.send(error);
  }
};