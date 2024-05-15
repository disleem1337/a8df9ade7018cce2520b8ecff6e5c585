import { Event } from "@/types/sportProgram";

export interface GetSportProgramResponse {
  sportId: number;
  events: Array<Event>;
}