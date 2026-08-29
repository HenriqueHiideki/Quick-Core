import { FastifyInstance } from 'fastify'
import { createPoll } from '../controllers/create-poll'
import { authenticate } from '../middlewares/authenticate'

export async function createPollRoutes(app: FastifyInstance) {
  app.post('/polls', { preHandler: authenticate }, createPoll)
}