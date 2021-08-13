import {IEnvironment} from "./environment-interface";

export const environment: IEnvironment = {
  production: true,
  apiUrl: "https://api.context2.com/",
  contextId: 2,
  someAction: (param: string) => alert('I am on context 2 - ' + param)
};
