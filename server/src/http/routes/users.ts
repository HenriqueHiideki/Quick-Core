import { FastifyInstance } from 'fastify'
import { getMe } from '../controllers/get-me'
import { updateMe } from '../controllers/update-me'
import { authenticate } from '../middlewares/authenticate'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/users/me', { preHandler: authenticate }, getMe)
  app.patch('/users/me', { preHandler: authenticate }, updateMe)
}