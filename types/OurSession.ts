import { OurUser } from "~/types/OurUser";

export interface OurSession {
  authToken?: string;
  user?: OurUser;
}