import { FastifyInstance } from 'fastify'
import { login } from '../controllers/login'

export async function loginRoutes(app: FastifyInstance) {
  app.post('/login', login)
}