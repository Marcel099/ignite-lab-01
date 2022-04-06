import { Injectable } from "@nestjs/common";
import slugify from "slugify";

import { PrismaService } from "../database/prisma/prisma.service";

interface CreatePurchaseDTO {
  title: string;

} 

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  listPurchases() {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }
}