import { OurSubscription } from "~/types/OurSubscription";
import { OurRole } from "~/types/OurRole";

export interface OurUser {
  id?: number;
  username: string;
  name?: string;
  password?: string;
  email?: string;
  emailVerified?: boolean;
  loginType?: string;
  subscription?: OurSubscription | null;
  role: OurRole;
  avatarUrl?: string;
  createdAt?: number;
}