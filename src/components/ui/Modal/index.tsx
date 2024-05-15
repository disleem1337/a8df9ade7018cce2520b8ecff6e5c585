import { Portal } from "@/components/ui/Portal";
import { ModalBodyWrapper, ModalWrapper } from "./styled";
import { useEffect, useState } from "react";

export interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export function Modal({ isOpen, children }: ModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {show && (
        <Portal style={{zIndex: 9999999, position: 'relative'}}>
          {isOpen && (
            <ModalWrapper>
              <ModalBodyWrapper>{children}</ModalBodyWrapper>
            </ModalWrapper>
          )}
        </Portal>
      )}
    </>
  );
}
