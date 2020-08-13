import PersonService from './business-logic/services/Person/Person.service';
import Person from './business-logic/models/Person/Person.model';

const personService = new PersonService();

const personResult = personService
  .findById(9)
  // .then((response) => console.log(response))
  .then((person) => new Person(person).isHeightGreaterThan(200))
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// const peopleService = new PersonService();
//
// const peopleResult = peopleService
//   .findAll()
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
