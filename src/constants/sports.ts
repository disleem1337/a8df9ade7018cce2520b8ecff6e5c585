import { BasketballIcon, FootballIcon, TennisIcon } from "@/icons";
import { ESport } from "@/types/sportProgram";

export const sportNameToId: Record<string, ESport> = {
  futbol: ESport.FUTBOL,
  basketbol: ESport.BASKETBOL,
  tenis: ESport.TENIS,
};

export const sportIdToName: Record<ESport, string> = {
  [ESport.FUTBOL]: "futbol",
  [ESport.BASKETBOL]: "basketbol",
  [ESport.TENIS]: "tenis",
};

export const sportMatchResults: Record<ESport, string[]> = {
  [ESport.FUTBOL]: ["1", "0", "2"],
  [ESport.BASKETBOL]: ["1", "2"],
  [ESport.TENIS]: ["1", "2"],
};

export const sportMatchResultMuks: Record<ESport, string> = {
  [ESport.FUTBOL]: "1_1",
  [ESport.BASKETBOL]: "1_2",
  [ESport.TENIS]: "1_9",
};

export const sportIdToIcon: Record<ESport, React.FC> = {
  [ESport.FUTBOL]: FootballIcon,
  [ESport.BASKETBOL]: BasketballIcon,
  [ESport.TENIS]: TennisIcon,
}