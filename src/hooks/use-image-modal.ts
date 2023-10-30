import { create } from "zustand";

interface useImageModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useImageModal = create<useImageModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
