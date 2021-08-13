import {IEnvironment} from "./environment-interface";

export const environment: IEnvironment = {
  production: false,
  apiUrl: "http://localhost:8000/",
  contextId: 2,
  someAction: (param: string) => alert('I am on context 2' + param)
};
