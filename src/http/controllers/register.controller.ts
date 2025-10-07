import type { FastifyReply, FastifyRequest } from 'fastify'
import { registerService } from '@/services/register.service.ts'
import z from 'zod'

export async function register(req:FastifyRequest, res:FastifyReply) {
  const schemaBodyRegister = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
  })

  const { name, email, password } = schemaBodyRegister.parse(req.body)

  try {
    await registerService({ name, email, password })
  } catch (error) {
    return res.status(409).send({ error })
  }

  return res.status(201).send()
}
