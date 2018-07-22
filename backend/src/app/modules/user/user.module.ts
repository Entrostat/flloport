import { UserController } from '@user/controllers/user.controller';
import { UserService } from '@user/services/user.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [ UserController ],
    providers: [ UserService ]
})
export class UserModule {}
