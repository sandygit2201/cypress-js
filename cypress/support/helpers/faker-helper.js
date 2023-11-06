import { faker } from "@faker-js/faker";
class FakerHelpers {
  getFirstName() {
    return  faker.person.firstName()

  }

  getLastName() {
    return faker.person.lastName();

  }

  getPostCode() {
    return faker.location.zipCode();

  }
}

export default new FakerHelpers();
