import { useCarritoStore } from '../Store/useCarritoStore.js'

function Encabezado() {
  const items = useCarritoStore((state) => state.items)
  const totalUnidades = items.reduce((suma, item) => suma + item.cantidad, 0)

  return (
    <header className="encabezado">
      <h1>Mi Tienda</h1>
      <span className="insignia" aria-label={`${totalUnidades} productos en el carrito`}>
        {totalUnidades}
      </span>
    </header>
  )
}

export default Encabezado