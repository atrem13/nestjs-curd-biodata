import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(private dbService: PrismaService) { }

  async create(createMemberDto: CreateMemberDto) {
    const createMember = await this.dbService.member.create({
      data: createMemberDto
    });
    if (createMember) {
      return {
        statusCode: 200,
        message: 'success'
      }
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const memberAll = await this.dbService.member.findMany();
    return {
      statusCode: 200,
      message: 'success',
      data: memberAll ?? []
    }
  }

  async findOne(id: number) {
    const member = await this.dbService.member.findFirst({ where: { id } });
    return {
      statusCode: 200,
      message: 'success',
      data: member ?? {}
    }
  }

  async update(id: number, updateMemberDto: UpdateMemberDto) {
    const member = await this.dbService.member.update({
      where: { id },
      data: updateMemberDto
    });
    if (member) {
      return {
        statusCode: 200,
        message: 'success',
        data: member ?? {}
      }
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const member = await this.dbService.member.delete({ where: { id } });
    if (member) {
      return {
        statusCode: 200,
        message: 'success'
      }
    }
  }
}
