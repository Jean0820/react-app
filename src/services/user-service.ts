import create from "./http-service";

export type User = {
  id: number;
  name: string;
  email: string;
};

export default create("/users");
