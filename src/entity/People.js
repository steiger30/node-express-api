class People {
  name;
  phone;
  email;
  cpf;

  constructor({ name, phone, email, cpf, }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.cpf = cpf;
  }
}

module.exports = People