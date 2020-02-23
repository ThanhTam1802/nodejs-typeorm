import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Customer } from '../../entity/Customer';
import { customerSchema } from './schema';


export const getAllCustomers = async (req: Request, res: Response) => {
  const customerRepository = getManager().getRepository(Customer);
  console.log
  const results = await customerRepository.find();
  res.send(results);
};

export const getCustomerById = async (req: Request, res: Response) => {
  const customerRepository = getManager().getRepository(Customer);
  const results = await customerRepository.findOne(req.params.id);
  res.send(results);
};

export const createCustomer = async (req: Request, res: Response) => {
  const customerRepository = getManager().getRepository(Customer);
  try {
    // const value = await customerSchema.validateAsync(req.body);
    const customer = await customerRepository.create(req.body);
    const results = await customerRepository.save(customer);
    res.status(200).send(results);
  } catch (error) {
    res.send(error);
  };
};

export const updateCustomerById = async (req: Request, res: Response) => {
  const customerRepository = getManager().getRepository(Customer);
  try {
    // const value = await customerSchema.validateAsync(req.body);
    const customer = await customerRepository.findOne(req.params.id);
    customerRepository.merge(customer, req.body);
    const results = await customerRepository.save(customer);
    res.status(200).send(results);
  } catch (error) {
    res.send(error)
  }
};

export const deleteCustomerById = async (req: Request, res: Response) => {
  const customerRepository = getManager().getRepository(Customer);
  const results = await customerRepository.delete(req.params.id);
  res.send(results);
};
