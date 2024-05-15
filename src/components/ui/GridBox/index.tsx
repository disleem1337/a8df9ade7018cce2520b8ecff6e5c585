import { GridBoxWrapper } from "./styled";

export interface GridBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  w?: number;
}

export function GridBox({ w, children, ...props }: GridBoxProps) {
  return (
    <GridBoxWrapper $w={w} {...props}>
      {children}
    </GridBoxWrapper>
  );
}
