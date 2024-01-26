import { Inject, forwardRef, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  constructor(
    @Inject(forwardRef(() => ConfigService))
    private configService: ConfigService,
  ) {}

  async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(
      Number(this.configService.get('SALT_ROUNDS')),
    );

    return await bcrypt.hash(password, salt);
  }

  async comparePassword(candidatePassword: string, hash: string) {
    return await bcrypt.compare(candidatePassword, hash);
  }
}
