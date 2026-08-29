import { FastifyInstance } from 'fastify'
import { register } from '../controllers/register'

export async function registerRoutes(app: FastifyInstance) {
  app.post('/register', register)
}