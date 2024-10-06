import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL,
});
