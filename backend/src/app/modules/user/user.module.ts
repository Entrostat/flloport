import { UserController } from '@modules/user/controllers/user.controller';
import { UserService } from '@modules/user/services/user.service';
import { Module } from '@nestjs/common';

@Module({
    controllers: [ UserController ],
    providers: [ UserService ]
})
export class UserModule {}
