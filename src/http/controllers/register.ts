import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { RegisterUseCase } from '@/use-cases/register'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { UserAlreeadyExistsError } from '@/use-cases/errors/user-already-exists'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    password: z.string().min(6),
    phone: z.string().min(11),
  })

  const { name, password, phone } = registerBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    await registerUseCase.execute({
      name,
      password,
      phone,
    })
  } catch (err) {
    if (err instanceof UserAlreeadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }
    // reply.status(500).send() // TODO: fix me
    throw err
  }

  return reply.status(201).send()
}
