import { apiClient } from "@/lib/axios";
import { BaseResponse } from "@/types/api";

export async function get<T>(url: string, params?: any): Promise<T> {
    const response = await apiClient.get<BaseResponse<T>>(url, { params });
  
    if (!response.data.isSuccess) {
      throw new Error(response.data.message);
    }

    return response.data.data;
  }
  