import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository.ts'

import type { UserRepositoryInterface } from '@/repositories/userRepositoryInterface.ts'
import { hash } from 'bcrypt'
import { UserEmailExist } from './errors/user-email-exist.ts'

interface RegisterReq {
  name: string,
  email: string,
  password: string
}

export class RegisterService {
  public constructor(private registerRepository:UserRepositoryInterface) {}

  async execute({ email, name, password }:RegisterReq) {
    const prismaUsersRepository = new PrismaUsersRepository()

    const emailWithSameUser = await prismaUsersRepository.findByEmail(email)
    if (emailWithSameUser) {
      throw new UserEmailExist()
    }

    const passwordHash = await hash(password, 6)

    await prismaUsersRepository.create({
      name,
      email,
      password_hash: passwordHash,
    },
    )
  }
}
