import { useEffect, useState } from 'react'
import { useCarritoStore } from '../Store/useCarritoStore.js'

const formatoPrecio = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'USD',
})

function ListaProductos() {
  const agregarProducto = useCarritoStore((state) => state.agregarProducto)
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [reintento, setReintento] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function cargarProductos() {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('No se pudieron cargar los productos.')
        }

        const productosApi = await response.json()

        setProductos(
          productosApi.map(({ id, title, price, image }) => ({
            id,
            nombre: title,
            precio: price,
            imagen: image,
          })),
        )
        setError('')
      } catch {
        if (!controller.signal.aborted) {
          setError('No fue posible cargar los productos. Revisa tu conexión e inténtalo de nuevo.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false)
        }
      }
    }

    cargarProductos()

    return () => controller.abort()
  }, [reintento])

  return (
    <section className="panel">
      <h2>Productos</h2>
      {cargando ? (
        <p className="estado-productos">Cargando productos...</p>
      ) : error ? (
        <div className="estado-productos">
          <p>{error}</p>
          <button
            className="btn btn-secundario"
            onClick={() => {
              setCargando(true)
              setReintento((actual) => actual + 1)
            }}
          >
            Reintentar
          </button>
        </div>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className="fila">
            <div className="producto-identidad">
              <img className="producto-imagen" src={producto.imagen} alt="" />
              <div>
                <p className="fila-nombre">{producto.nombre}</p>
                <p className="fila-detalle">
                  {formatoPrecio.format(producto.precio)}
                </p>
              </div>
            </div>
            <button
              className="btn btn-primario"
              onClick={() => agregarProducto(producto)}
            >
              Agregar
            </button>
          </div>
        ))
      )}
    </section>
  )
}

export default ListaProductos