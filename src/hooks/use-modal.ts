import { create } from "zustand";

export type ModalType = "imageUpload" | "videoUpload";

interface useModalProps {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<useModalProps>((set) => ({
  type: null,
  isOpen: false,
  onOpen: (type: ModalType) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false, type: null }),
}));
