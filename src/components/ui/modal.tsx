import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalType, useModal } from "@/hooks/use-modal";

interface ModalProps {
  title: string;
  description: string;
  children: React.ReactNode;
  typeModal: ModalType;
}

export const Modal = ({
  title,
  description,
  children,
  typeModal,
}: ModalProps) => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === typeModal;

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
