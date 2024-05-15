import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { CouponCreatedModalTitle, CouponCreatedModalWrapper } from "./styled";

export interface CouponCreatedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CouponCreatedModal({
  isOpen,
  onClose,
}: CouponCreatedModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <CouponCreatedModalWrapper>
        <CouponCreatedModalTitle>
          Kuponunuz Başarıyla oluşturulmuştur
        </CouponCreatedModalTitle>
        <Button onClick={onClose} fullWidth>
          Yeni Kupon Yap
        </Button>
      </CouponCreatedModalWrapper>
    </Modal>
  );
}
