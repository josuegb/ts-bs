export interface IPersonBase {
  name: string;
  gender: string;
}

export interface IPerson extends IPersonBase {
  birth_year: string;
  height: string;
  url: string;
}

export interface IPersonDTO extends IPersonBase {
  id: number;
  birthYear: string;
  height: number;
}

export interface IPersonResponse {
  data: IPerson;
}

export interface IPeopleResponse {
  data: {
    count: number;
    results: Array<IPerson>;
  };
}

export interface IPeoplePagination {
  page: number;
  limit: number;
}

export interface IPeopleDTO {
  count: number;
  people: Array<IPersonDTO>;
  pagination: IPeoplePagination
}
