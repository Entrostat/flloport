import { AuthService } from '@auth/services/auth.service';
import { Get, Controller } from '@nestjs/common';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}
}
