import { prisma } from '@/lib/prisma'
import { Prisma, Phone } from '@prisma/client'
import { IPhonesRepository } from '../phones-repository'

export class PrismaPhonesRepository implements IPhonesRepository {
  async create(data: Prisma.PhoneUncheckedCreateInput): Promise<Phone> {
    const phone = await prisma.phone.create({
      data,
    })

    return phone
  }

  async fetchByService(serviceId: string): Promise<Phone[] | []> {
    const phones = await prisma.phone.findMany({
      where: {
        service_id: serviceId,
      },
    })

    return phones
  }
}
