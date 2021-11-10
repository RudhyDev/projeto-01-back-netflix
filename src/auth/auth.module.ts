import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstant } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({ 
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '1h'}
    }),
  ],
  providers: [AuthService, PrismaService, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
