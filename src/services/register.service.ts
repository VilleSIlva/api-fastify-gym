import type { UserRepositoryInterface } from '@/repositories/userRepositoryInterface.ts'
import type { User } from '@prisma/client'
import { hash } from 'bcrypt'
import { UserEmailExist } from './errors/user-email-exist.ts'

interface RegisterReq {
  name: string,
  email: string,
  password: string
}

interface RegisterRes {
  user: User
}

export class RegisterService {
  public constructor(private registerRepository:UserRepositoryInterface) {}

  async execute({ email, name, password }:RegisterReq):Promise<RegisterRes> {
    const emailWithSameUser = await this.registerRepository.findByEmail(email)
    if (emailWithSameUser) {
      throw new UserEmailExist()
    }

    const passwordHash = await hash(password, 6)

    const user = await this.registerRepository.create({
      name,
      email,
      password_hash: passwordHash,
    },
    )

    return {
      user,
    }
  }
}
