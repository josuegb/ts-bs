import {IPersonDTO} from '../../interfaces/Person/Person.interfaces';

export default class Person {
  private _person: IPersonDTO;
  
  constructor(person: IPersonDTO) {
    this._person = person;
  }

  public isHeightGreaterThan(height: number = 0): boolean {
    return this._person.height > height;
  }
}
