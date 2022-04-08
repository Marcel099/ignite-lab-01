import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

interface CreateStudentDTO {
  authUserId: string;
}

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  listStudents() {
    return this.prisma.student.findMany();
  }

  getStudentById(id: string) {
    return this.prisma.student.findUnique({
      where: {
        id,
      }
    })
  }

  getStudentByAuthUserId(authUserId: string) {
    return this.prisma.student.findUnique({
      where: {
        authUserId,
      }
    })
  }

  createStudent({ authUserId }: CreateStudentDTO) {
    return this.prisma.student.create({
      data: {
        authUserId,
      }
    })
  }
}