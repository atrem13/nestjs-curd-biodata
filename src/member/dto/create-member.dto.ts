import { Prisma } from "@prisma/client";
import { IsNotEmpty,IsString, IsNumber } from 'class-validator';
export class CreateMemberDto {
    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsNumber()
    @IsNotEmpty()
    nik: number;

    @IsString()
    @IsNotEmpty()
    address: string;
}
