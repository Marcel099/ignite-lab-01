import { Injectable } from "@nestjs/common";

import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listProducts() {
    return this.prisma.product.findMany()
  }
}