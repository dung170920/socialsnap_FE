import { User } from "@/types";
import { api } from ".";

const path = "user/";

export async function getUserApi(userId: string) {
  return api.get<User>(`${path}${userId}`);
}
