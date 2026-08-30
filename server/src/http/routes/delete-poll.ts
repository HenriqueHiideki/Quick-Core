import { FastifyInstance } from 'fastify';
import { deletePoll } from '../controllers/delete-poll';
import { authenticate } from '../middlewares/authenticate';

export async function deletePollRoutes(app: FastifyInstance) {
    app.delete('/polls/:pollId', { preHandler: authenticate }, deletePoll)
}