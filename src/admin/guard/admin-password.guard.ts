import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminPasswordGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const admin = request.user;
    const { oldPassword } = request.body;

    if (!admin) {
      throw new UnauthorizedException('사용자를 찾을 수 없습니다.');
    }

    const isVerified = await bcrypt.compare(oldPassword, admin.hashedPassword);
    if (!isVerified) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다.');
    }

    return true;
  }
}
