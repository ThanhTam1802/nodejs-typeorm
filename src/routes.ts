import { getAllCustomers, createCustomer, getCustomerById, updateCustomerById, deleteCustomerById } from './controllers/customer';

export const AppRoutes = [
  // Customer routes
  { path: '/customers', method: 'get', action: getAllCustomers },
  { path: '/customer/:id', method: 'get', action: getCustomerById },
  { path: '/customer', method: 'post', action: createCustomer },
  { path: '/customer/:id', method: 'put', action: updateCustomerById },
  { path: '/customer/:id', method: 'delete', action: deleteCustomerById }
]