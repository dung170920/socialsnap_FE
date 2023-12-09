import axios from "axios";

export function handleBadRequestError(error: unknown) {
  return axios.isAxiosError(error) && error.response?.status === 400;
}
