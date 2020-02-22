import { getAllCustomer, createCustomer } from './controllers/customer';

export const AppRoutes = [
  {
    path: '/customers',
    method: 'get',
    action: getAllCustomer
  },
  {
    path: '/customer',
    method: 'post',
    action: createCustomer
  }
]