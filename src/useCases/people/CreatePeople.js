const People = require("../../entity/People")
const InMemoryPeopleRepository = require("../../repositories/inMemory/InMemoryPeopleRepository")
class CreatePeople {
  async execute({ name, phone, email, cpf, }) {
    const classPeople = new People({ name, phone, email, cpf, })
    const peopleRespository = new InMemoryPeopleRepository()
    const peopleInRespository = peopleRespository.createPeople(classPeople)
    return peopleInRespository
  }
}

module.exports = CreatePeople