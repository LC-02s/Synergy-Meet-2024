import { create } from 'zustand'

interface TimerStore {
  isTimesUp: boolean
  setTimesUp: (status: boolean) => void
}

const useTimerStore = create<TimerStore>((set) => ({
  isTimesUp: false,
  setTimesUp: (isTimesUp) => set({ isTimesUp }),
}))

export default function useTimesUp() {
  return useTimerStore((state) => state)
}
