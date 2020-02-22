import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Customer } from '../../entity/Customer';

export const getAllCustomer = async (req: Request, res: Response) => {
  const allCustomers = getManager()
    .getRepository(Customer)
    .createQueryBuilder('customer')
    .getMany()
  res.send(allCustomers);
};

export const createCustomer = async (req: Request, res: Response) => {

  await getManager()
    .createQueryBuilder()
    .insert()
    .into(Customer)
    .values(req.body)
    .execute()
    
  res.send(req.body);
};