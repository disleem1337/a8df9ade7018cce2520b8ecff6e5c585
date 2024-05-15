import { appConfig } from "@/constants/appConfig";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: appConfig.apiUrl,
});