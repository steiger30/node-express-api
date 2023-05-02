
let arrayPeople = []
let id = 0
class InMemoryPeopleRepository {
  createPeople({ name, phone, email, cpf, }) {
    id++
    arrayPeople.push({ id, name, phone, email, cpf, })
    return arrayPeople
  }
  updateMovie(peopleId, { name, phone, email, cpf, }) {
    const peopleIndexDelete = arrayPeople.findIndex((people) => people.id == peopleId);
    if (peopleIndexDelete !== -1) {
      arrayPeople[peopleIndexDelete].name = name
      arrayPeople[peopleIndexDelete].phone = phone
      arrayPeople[peopleIndexDelete].email = email
      arrayPeople[peopleIndexDelete].cpf = cpf
    }
    return arrayMovie
  }

  findAllPeople() {
    return arrayPeople
  }

  deletePeople(peopleId) {
    const peopleIndexDelete = arrayPeople.findIndex((people) => people.id == peopleId);
    if (peopleIndexDelete !== -1) {
      arrayPeople.splice(peopleIndexDelete, 1);
    }
    return arrayPeople
  }
}
module.exports = InMemoryPeopleRepository
