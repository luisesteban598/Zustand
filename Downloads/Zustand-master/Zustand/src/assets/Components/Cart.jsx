import { useCarritoStore } from '../Store/useCarritoStore.js'

function Carrito() {
  const items = useCarritoStore((state) => state.items)
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto)
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito)
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0,
  )

  return (
    <section className="panel">
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p className="vacio">Tu carrito está vacío</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="fila">
              <div>
                <p className="fila-nombre">{item.nombre}</p>
                <p className="fila-detalle">
                  {item.cantidad} × ${item.precio.toLocaleString('es-CO')}
                </p>
              </div>
              <button
                className="btn btn-secundario"
                onClick={() => eliminarProducto(item.id)}
              >
                Quitar
              </button>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
            <strong>${total.toLocaleString('es-CO')}</strong>
          </div>
          <button
            className="btn btn-secundario btn-bloque"
            onClick={vaciarCarrito}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </section>
  )
}

export default Carrito