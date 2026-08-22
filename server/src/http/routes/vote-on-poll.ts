import { FastifyInstance } from 'fastify'
import { voteOnPoll } from '../controllers/vote-on-poll'

export async function voteOnPollRoutes(app: FastifyInstance){
    app.post('/polls/:pollId/votes', voteOnPoll)
}