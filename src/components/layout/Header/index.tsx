import { ContainerWrapper } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/icons";
import { ButtonsContainer, HeaderInnerWrapper, HeaderWrapper } from "./styled";

export function Header() {
  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <HeaderInnerWrapper>
          <Logo />
          <ButtonsContainer>
            <Button variant="secondary">Giriş</Button>
            <Button variant="white">Üye Ol</Button>
          </ButtonsContainer>
        </HeaderInnerWrapper>
      </ContainerWrapper>
    </HeaderWrapper>
  );
}
