import { FastifyInstance } from 'fastify'
import { voteOnPoll } from '../controllers/vote-on-poll'
import { authenticate } from '../middlewares/authenticate'

export async function voteOnPollRoutes(app: FastifyInstance){
    app.post('/polls/:pollId/votes', { preHandler: authenticate }, voteOnPoll)
}