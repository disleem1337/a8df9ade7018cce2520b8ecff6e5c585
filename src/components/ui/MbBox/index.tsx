import { useTheme } from "styled-components";
import { MbBoxWrapper } from "./styled";

export interface MbBoxProps {
  mb: number;
}

export function MbBox({ mb }: MbBoxProps) {
  const theme = useTheme();
  const colorMap: Record<number, string> = {
    1: theme.colors.coralRed,
    2: theme.colors.acidGreen,
    3: theme.colors.lapisLazuli,
  };
  return <MbBoxWrapper $bgColor={colorMap[mb]}>{mb}</MbBoxWrapper>;
}

MbBox.displayName = "MbBox";