import {IEnvironment} from "./environment-interface";

export const environment: IEnvironment = {
  production: true,
  apiUrl: "https://api.context1.com/",
  contextId: 1,
  someAction: (param: string) => alert('I am on context 1' + param)
};
