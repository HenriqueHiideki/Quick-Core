import { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { prisma } from "../../lib/prisma"

export async function getPoll (request: FastifyRequest, reply: FastifyReply){
    const getPollParams = z.object({
        pollId: z.coerce.number(),
    })

    const { pollId } = getPollParams.parse(request.params)

    const poll = await prisma.polls.findUnique({
        where: {
           id: pollId,
        },
        include: {
            options: {
                select: {
                    id: true, 
                    option_text: true,
                },
            },
        },
    })

    if (!poll) {
        return reply.status(404).send({ message: 'Enquete nao encontrada, '})
    }

    return reply.status(200).send({ poll })
}