import { productos } from '../Data/product.jsx'
import { useCarritoStore } from '../Store/useCarritoStore.js'

function ListaProductos() {
  const agregarProducto = useCarritoStore((state) => state.agregarProducto)

  return (
    <section className="panel">
      <h2>Productos</h2>
      {productos.map((producto) => (
        <div key={producto.id} className="fila">
          <div>
            <p className="fila-nombre">{producto.nombre}</p>
            <p className="fila-detalle">
              ${producto.precio.toLocaleString('es-CO')}
            </p>
          </div>
          <button
            className="btn btn-primario"
            onClick={() => agregarProducto(producto)}
          >
            Agregar
          </button>
        </div>
      ))}
    </section>
  )
}

export default ListaProductos