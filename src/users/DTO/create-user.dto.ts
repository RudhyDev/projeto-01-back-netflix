import { IsString, Length, IsEmail, IsNotEmpty  } from "class-validator";
export class CreateUserDto {
    @IsString()
    @Length(2, 100)
    name: string;

    @IsString()
    @IsEmail({}, {message: 'Informe um e-mail válido'})
    email: string;

    @IsString({ message: 'A senha deve conter no mínimo 6 caracteres e no máximo 32'})
    @Length(6, 32)
    password: string;

    @IsString({ message: 'A senha digitada não corresponde a primeira'})
    @Length(6, 32)
    passwordConfirmation: string;
}
