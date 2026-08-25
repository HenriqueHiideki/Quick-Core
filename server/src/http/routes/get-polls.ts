import { FastifyInstance } from 'fastify'
import { getPolls } from '../controllers/get-polls'

export async function getPollsRoutes(app: FastifyInstance) {
    app.get('/polls', getPolls)
}