/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand'

interface IUseSidebarToggle {
  isOpen: boolean
  setIsOpen: () => void
}
export const useSidebarToogle = create<IUseSidebarToggle>((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))
