import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCarritoStore = create(persist((set) => ({
  items: [],
  agregarProducto: (producto) =>
    set((state) => {
      const existe = state.items.find((item) => item.id === producto.id)

      // Si ya está en el carrito, aumenta su cantidad sin duplicar la fila.
      if (existe) {
        return {
          items: state.items.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item,
          ),
        }
      }

      // Los productos nuevos comienzan con una unidad.
      return { items: [...state.items, { ...producto, cantidad: 1 }] }
    }),
  disminuirProducto: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item,
        )
        .filter((item) => item.cantidad > 0),
    })),
  eliminarProducto: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  vaciarCarrito: () => set({ items: [] }),
}), { name: 'carrito-tienda' }))