import { Request, Response } from 'express'
import Product from '../models/Product.inteface';

class ProductController {

    private products: Product[] = [
        {
            id: 1,
            description: "Arroz parboilizado 5Kg",
            amount: 25.00,
            brand: "Tio João"
        },
        {
            id: 2,
            description: "Maionese 250gr",
            amount: 7.20,
            brand: "Hellmann's"
        },
        {
            id: 3,
            description: "Iogurte Natural 200ml",
            amount: 2.50,
            brand: "Itambé"
        },
        {
            id: 4,
            description: "Batata Maior Palha 300gr",
            amount: 15.20,
            brand: "Chipps"
        },
        {
            id: 5,
            description: "Nescau 400gr",
            amount: 8.00,
            brand: "Nestlé"
        }
    ];

    create = (req: Request, res: Response) =>  {    
        const product: Product = req.body;
        product.id = this.products.length + 1;
        this.products.push(product)
        res.send(product);
    }

    get = (req: Request, res: Response) => {   
        const id = parseInt(req.params.id);
        const product = this.products.find(item => item.id === id);
        if (product) {
          res.send(product);
        } else {
          res.status(404).json({ message: "Product not found"});
        }
    }

    getAll = (req: Request, res: Response) => {
        res.send(this.products);
    }

    edit = (req: Request, res: Response) => {    
        const id = parseInt(req.params.id);
        const index = this.products.findIndex(item => item.id === id);
        if (index !== -1) {
            const product: Product = req.body;
            product.id = index + 1;
            this.products[index] = product;
            res.send(this.products[index]);
        } else {
            res.status(404).json({ message: "Product not found"});
        }
    }

    delete = (req: Request, res: Response) => {    
        const id = parseInt(req.params.id);
        const index = this.products.findIndex(item => item.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            res.sendStatus(204)
        } else {
            res.status(404).json({ message: "Product not found"});
        }
    }
}

export default new ProductController()