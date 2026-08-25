import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { prisma } from '../../lib/prisma';

export async function deletePoll(request: FastifyRequest, reply: FastifyReply){
    const deletePollParams = z.object({
        pollId: z.coerce.number(),
    })

    const { pollId } = deletePollParams.parse(request.params)

    const poll = await prisma.polls.findUnique({
        where: { id: pollId },
    })

    if (!poll) {
        return reply.status(404).send({ message: 'Enquete nao encontrada.'})
    }

    await prisma.polls.delete({
        where: { id: pollId },
    })

    return reply.status(204).send()
}