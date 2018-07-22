import { UserService } from '@user/services/user.service';
import { Get, Controller } from '@nestjs/common';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}
}
