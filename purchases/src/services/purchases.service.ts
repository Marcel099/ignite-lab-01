import { Injectable } from "@nestjs/common";

import { PrismaService } from "../database/prisma/prisma.service";
import { KafkaService } from "../messaging/kafka.service";

interface CreatePurchaseDTO {
  customerId: string;
  productId: string;
} 

@Injectable()
export class PurchasesService {
  constructor(
    private prisma: PrismaService,
    private kafka: KafkaService
  ) {}

  listPurchases() {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  listPurchasesByCustomerId(customerId: string) {
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

    const customer = await this.prisma.customer.findUnique({
      where: {
        id: customerId,
      },
    })

    this.kafka.emit('purchases.purchase-created', {
      customer: {
        authUserId: customer.authUserId,
      },
      product: {
        id: product.id,
        title: product.title,
        slug: product.slug,
      },
    })

    return purchase;
  }
}
