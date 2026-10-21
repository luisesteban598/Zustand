import { create } from 'zustand'

export const useCarritoStore = create((set) => ({
  items: [],
  agregarProducto: (producto) =>
    set((state) => {
      const existe = state.items.find((item) => item.id === producto.id)

      if (existe) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item,
          ),
        }
      }

      return { items: [...state.items, { ...producto, cantidad: 1 }] }
    }),
  eliminarProducto: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  vaciarCarrito: () => set({ items: [] }),
}))