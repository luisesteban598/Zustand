import { useCarritoStore } from '../Store/useCarritoStore.js'

function Carrito() {
  const items = useCarritoStore((state) => state.items)
  const disminuirProducto = useCarritoStore((state) => state.disminuirProducto)
  const eliminarProducto = useCarritoStore((state) => state.eliminarProducto)
  const vaciarCarrito = useCarritoStore((state) => state.vaciarCarrito)
  const formatoPrecio = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'USD',
  })
  // Multiplica el precio por la cantidad para obtener el importe de cada fila.
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0,
  )

  // La vista distingue entre el carrito vacío y el que ya tiene productos.
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
                  {item.cantidad} × {formatoPrecio.format(item.precio)}
                </p>
                <p className="subtotal">
                  Subtotal: <strong>{formatoPrecio.format(item.precio * item.cantidad)}</strong>
                </p>
              </div>
              <div className="acciones-carrito">
                <button
                  className="btn btn-secundario btn-disminuir"
                  aria-label={`Disminuir cantidad de ${item.nombre}`}
                  onClick={() => disminuirProducto(item.id)}
                >
                  −
                </button>
                <span className="cantidad-item">{item.cantidad}</span>
                <button
                  className="btn btn-secundario"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}
          <div className="total">
            <span>Total</span>
            <strong>{formatoPrecio.format(total)}</strong>
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