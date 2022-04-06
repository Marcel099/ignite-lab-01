import { Injectable } from "@nestjs/common";

import { PrismaService } from "../database/prisma/prisma.service";

interface CreatePurchaseDTO {
  customerId: string;
  productId: string;
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

  listPurchasesFromCustomer(customerId: string) {
    return this.prisma.purchase.findMany({
      where: {
        customerId
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async createPurchase({ customerId, productId }: CreatePurchaseDTO) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      }
    })

    if (!product) {
      throw new Error('Product not found.')
    }

    const purchase = await this.prisma.purchase.create({
      data: {
        customerId,
        productId,
      }
    })

    return purchase;
  }
}