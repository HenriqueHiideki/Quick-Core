import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";
import { voting } from "../../utils/voting-pub-sub";

export async function voteOnPoll(request: FastifyRequest, reply: FastifyReply) {
  const voteOnPollParams = z.object({
    pollId: z.coerce.number(),
  });

  const voteOnPollBody = z.object({
    option_id: z.number(),
  });

  const { pollId } = voteOnPollParams.parse(request.params);
  const { option_id } = voteOnPollBody.parse(request.body);
  const user_id = request.userId as number;

  const option = await prisma.options.findUnique({
    where: {
      id: option_id,
    },
  });

  if (!option || option.poll_id !== pollId) {
    return reply
      .status(400)
      .send({ message: "Opcao invalida para esta enquete." });
  }

  try {
    await prisma.votes.create({
      data: {
        user_id,
        poll_id: pollId,
        option_id,
      },
    })

    const votesCount = await prisma.votes.count({
      where: { option_id },
    })

    voting.publish(pollId, {
      optionId: option_id,
      votes: votesCount
    })

    return reply.status(201).send({ message: "Voto registrado com sucesso!" });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return reply
        .status(400)
        .send({ message: "Voce já registrou nesta enquete." });
    }
    throw error;
  }
}