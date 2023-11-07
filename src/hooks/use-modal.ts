import { create } from "zustand";

export type ModalType =
  | "imageUpload"
  | "videoUpload"
  | "imagePreview"
  | "videoPreview";

interface ModalData {
  imageUrl?: string;
  videoUrl?: string;
  id?: string;
}

interface useModalProps {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<useModalProps>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type: ModalType, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null }),
}));
