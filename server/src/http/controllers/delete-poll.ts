import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { prisma } from '../../lib/prisma';

export async function deletePoll(request: FastifyRequest, reply: FastifyReply){
    const deletePollParams = z.object({
        pollId: z.coerce.number(),
    })

    const { pollId } = deletePollParams.parse(request.params)
    const user_id = request.userId as number

    const poll = await prisma.polls.findUnique({
        where: { id: pollId },
    })

    if (!poll) {
        return reply.status(404).send({ message: 'Enquete nao encontrada.'})
    }

    if (poll.user_id !== user_id) {
        return reply.status(403).send({ message: 'Voce nao tem permissao para excluir esta enquete.' })
    }

    await prisma.polls.delete({
        where: { id: pollId },
    })

    return reply.status(204).send()
}