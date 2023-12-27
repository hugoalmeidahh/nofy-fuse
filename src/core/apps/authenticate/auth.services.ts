import { compare } from 'bcryptjs'
import { IUsersRepository } from '../users/interfaces'
import { IAuthLoginRequest, IAuthLoginResponse } from './interfaces'
import { InvalidCredentialsError } from '@/core/errors'

export class AuthenticateServices {
  constructor(private usersRepository: IUsersRepository) {}

  async login({
    email,
    password,
  }: IAuthLoginRequest): Promise<IAuthLoginResponse> {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError() // Error() // InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError() // Error() // InvalidCredentialsError()
    }

    return { user }
  }
}
