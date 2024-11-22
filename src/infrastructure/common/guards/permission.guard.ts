import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserData } from '../user.data';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('PermissionGuard');
    // throw new Error("Method not implemented.");

    // const request = context.switchToHttp().getRequest();
    const requiredPermission = this.reflector.getAllAndOverride<string>(
      'permission',
      [context.getHandler(), context.getClass()],
    );

    console.log('requiredPermission', requiredPermission);
    if (requiredPermission === 'public') return true;

    const user = UserData.getUserData();

    console.log('user', user);
    return requiredPermission.includes(user.role);
  }
}
