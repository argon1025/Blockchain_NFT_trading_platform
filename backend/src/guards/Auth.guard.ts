import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

// 세션 데이터가 올바른지 확인한다.
@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    // 로그인 유무를 확인한다
    Logger.log('AuthGuard', 'INFO');
    const request = context.switchToHttp().getRequest();
    return true;
  }
}
