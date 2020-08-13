import {IPerson, IPersonDTO} from '../../interfaces/Person/Person.interfaces';

export default class PersonUtils {
  static instance: PersonUtils;
  
  public static getInstance() {
    if (!this.instance) {
      this.instance = new PersonUtils();
    }
    return this.instance;
  }
  
  public convertPersonResponseToPerson(person: IPerson): IPersonDTO {
    const {name, birth_year, gender, height, url} = person;
    
    const id = PersonUtils.instance.extractPersonIdFromUrl(url);
    const _height = parseInt(height);
    
    return {
      id,
      name,
      birthYear: birth_year,
      gender,
      height: _height
    };
  }
  
  public extractPersonIdFromUrl(url: string): number {
    const urlSplit = url.split('/');
    const personId: string = urlSplit[urlSplit.length - 2];
    const parsedIntPersonId = parseInt(personId);
    return !isNaN(parsedIntPersonId) ? parsedIntPersonId : -1;
  }
}
