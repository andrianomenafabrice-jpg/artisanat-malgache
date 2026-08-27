import { create } from 'zustand'

interface FilterState {
  activeRegion: string | null
  activeCategory: string | null
  searchQuery: string
  setRegion: (region: string | null) => void
  setCategory: (category: string | null) => void
  setSearchQuery: (query: string) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  activeRegion: null,
  activeCategory: null,
  searchQuery: '',
  setRegion: (region) =>
    set((state) => ({
      activeRegion: state.activeRegion === region ? null : region,
    })),
  setCategory: (category) =>
    set((state) => ({
      activeCategory: state.activeCategory === category ? null : category,
    })),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () => set({ activeRegion: null, activeCategory: null, searchQuery: '' }),
}))