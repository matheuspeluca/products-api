import { Router, Request, Response } from 'express';
import ProductController from './app/controllers/Product.controller';

const routes = Router()

routes.post('/products', ProductController.create)
routes.get('/products', ProductController.getAll)
routes.get('/products/:id', ProductController.get)
routes.put('/products/:id', ProductController.edit)
routes.delete('/products/:id', ProductController.delete)

export default routes