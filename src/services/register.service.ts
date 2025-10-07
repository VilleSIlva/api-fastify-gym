// eslint-disable-next-line @stylistic/max-len
import { PrismaUsersRepository } from '@/repositories/prisma-users-repository.ts'
import { hash } from 'bcrypt'

interface RegisterReq {
  name: string,
  email: string,
  password: string
}

export async function registerService({ email, name, password }:RegisterReq) {
  const prismaUsersRepository = new PrismaUsersRepository()

  const emailWithSameUser = await prismaUsersRepository.findByEmail(email)

  if (emailWithSameUser) {
    throw new Error()
  }

  const passwordHash = await hash(password, 6)

  await prismaUsersRepository.create({
    name,
    email,
    password_hash: passwordHash,
  },
  )
}
