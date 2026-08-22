import { FastifyInstance } from "fastify";
import { getPoll } from "../controllers/get-poll";

export async function getPollRoutes(app: FastifyInstance){
    app.get('/polls/:pollId', getPoll)
}