import { Controller, Injectable  } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

import { CoursesService } from "../../services/courses.service";
import { EnrollmentsService } from "../../services/enrollments.service";
import { StudentsService } from "../../services/students.service";

interface Customer {
  authUserId: string;
}

interface Product {
  id: string;
  title: string;
  slug: string;
}

interface PurchaseCreatedPayload {
  customer: Customer;
  product: Product;
}

@Injectable()
@Controller()
export class PurchaseController {
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @EventPattern('purchases.purchase-created')
  async purchaseCreated(
    @Payload('value') { customer, product }: PurchaseCreatedPayload
  )
  {
    let student = await this.studentsService.getStudentByAuthUserId(
      customer.authUserId
    );

    if (!student) {
      student = await this.studentsService.createStudent({
        authUserId: customer.authUserId,
      });
    }

    let course = await this.coursesService.getCourseBySlug(product.slug);

    if (!course) {
      course = await this.coursesService.createCourse({
        title: product.title,
        slug: product.slug,
      });
    }

    await this.enrollmentsService.createEnrollment({
      courseId: course.id,
      studentId: student.id,
    })
  }
}
