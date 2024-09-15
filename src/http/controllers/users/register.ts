import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { UserAlreeadyExistsError } from '@/use-cases/errors/user-already-exists'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    password: z.string().min(6),
    phone: z.string().min(11),
    locationId: z.number(),
  })

  const { name, password, phone, locationId } = registerBodySchema.parse(
    request.body,
  )

  try {
    const registerUseCase = makeRegisterUseCase()

    const user = await registerUseCase.execute({
      name,
      password,
      phone,
      locationId,
    })

    return reply.status(201).send({ user })
  } catch (err) {
    if (err instanceof UserAlreeadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    return reply.status(500).send({ message: err.message })
  }
}
