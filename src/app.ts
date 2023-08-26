import 'dotenv/config'
import express from 'express'
import routes from './routes'

class App {
    
    public server = express()
    
    constructor() {
      this.routes()
    }

    routes() {
      this.server.use(routes)
    }
  }
  
  export default new App().server