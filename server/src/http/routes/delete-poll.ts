import { FastifyInstance } from 'fastify';
import { deletePoll } from '../controllers/delete-poll';

export async function deletePollRoutes(app: FastifyInstance) {
    app.delete('/polls/:pollId', deletePoll)
}