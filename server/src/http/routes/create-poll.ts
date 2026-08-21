import { FastifyInstance } from "fastify";
import { createPoll } from "../controllers/create-poll";

export async function createPollRoutes(app: FastifyInstance){
    app.post('/polls', createPoll)
}