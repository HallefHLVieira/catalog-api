import { InMemoryPhonesRepository } from '@/domain/repositories/in-memory/in-memory-phones-repository'
import { InMemoryServicesRepository } from '@/domain/repositories/in-memory/in-memory-services-repository'
import { FetchServicesByUserUseCase } from '@/domain/use-cases/fetch-services-by-user'
import { ServiceUseCase } from '@/domain/use-cases/service'
import { expect, describe, it, beforeEach } from 'vitest'

let servicesRepository: InMemoryServicesRepository
let phonesRepository: InMemoryPhonesRepository
let sut: ServiceUseCase
let listSut: FetchServicesByUserUseCase

describe('Fetch Services by User Use Case', () => {
  beforeEach(() => {
    servicesRepository = new InMemoryServicesRepository()
    phonesRepository = new InMemoryPhonesRepository()

    sut = new ServiceUseCase(servicesRepository, phonesRepository)
    listSut = new FetchServicesByUserUseCase(servicesRepository)
  })

  it('should be return a list with one service by user', async () => {
    expect.assertions(1)

    const userId = 'user-01'

    await sut.execute({
      userId,
      name: 'Service-01',
      description: 'Descrição',
      street: 'Rua-01',
      number: '100',
      locationId: 1,
    })

    await sut.execute({
      userId: 'User-02',
      name: 'Service-02',
      description: 'Descrição',
      street: 'Rua-02',
      number: '100',
      locationId: 1,
    })

    const servicesList = await listSut.execute({ userId })

    expect(servicesList.services.length).toEqual(1)
  })
})
