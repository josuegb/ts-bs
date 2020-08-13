import axios from 'axios';

import {
  IPeopleDTO,
  IPeoplePagination,
  IPeopleResponse,
  IPerson,
  IPersonDTO,
  IPersonResponse
} from '../../interfaces/Person/Person.interfaces';
import PersonUtils from '../../utils/Person/Person.utils';

export default class PersonService {
  private baseUrl: string = 'https://swapi.dev/api';
  private static instance: PersonService;
  private peopleUtils = PersonUtils.getInstance();
  
  public static getInstance(): PersonService {
    if (!PersonService.instance) {
      PersonService.instance = new PersonService();
    }
    return PersonService.instance;
  }
  
  public async findById(id: number): Promise<IPersonDTO> {
    const personResponse: IPersonResponse
      = await axios.get(`${this.baseUrl}/people/${id}/?format=json`);

    return this.peopleUtils.convertPersonResponseToPerson(personResponse.data);
  }
  
  public async findAll(pagination: IPeoplePagination = { page: 1, limit: 10 }): Promise<IPeopleDTO> {
    const peopleResponse: IPeopleResponse =
      await axios.get(`${this.baseUrl}/people/?page=${pagination.page}&format=json`);

    const { count, results } = peopleResponse.data;
    const people = results.map(this.peopleUtils.convertPersonResponseToPerson);
    
    return {
      people,
      count,
      pagination
    };
  }
}
