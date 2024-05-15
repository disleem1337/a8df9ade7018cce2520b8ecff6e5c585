import { endpoints } from "@/constants/endpoints";
import { GetSportProgramResponse } from "@/types/api/sportProgram";
import { get } from "@/services";

export const getSportProgram = async (sportId: number) =>
  get<GetSportProgramResponse>(`${endpoints.sportProgram}/${sportId}`);
