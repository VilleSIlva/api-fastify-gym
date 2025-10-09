import type { UserRepositoryInterface } from '@/repositories/userRepositoryInterface.ts'
import { InvalidadAuthorizate } from './errors/invalid-authorizate.ts'
import { compare } from 'bcrypt'
import type { User } from '@prisma/client'

interface AuthenticateServiceReq {
  email: string,
  password: string
}

interface AuthenticateServiceRes {
  user: User
}
export class AuthenticateService {
  constructor(private userRepository:UserRepositoryInterface) {}

  async execute({ email, password }:AuthenticateServiceReq): Promise<AuthenticateServiceRes> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new InvalidadAuthorizate()
    }

    const doesMathPassword = await compare(password, user.password_hash)

    if (!doesMathPassword) {
      throw new InvalidadAuthorizate()
    }

    return { user }
  }
}
