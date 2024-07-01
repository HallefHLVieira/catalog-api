import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'

export const app = fastify()

app.post('/users', async (request, reply) => {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6),
    phone: z.string().min(11),
  })

  const { name, email, password, phone } = registerBodySchema.parse(
    request.body,
  )

  await prisma.user.create({
    data: {
      name,
      email,
      phone,
      password_hash: password,
    },
  })

  return reply.status(201).send()
})
