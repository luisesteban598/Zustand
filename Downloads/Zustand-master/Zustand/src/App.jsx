import Carrito from './assets/Components/Cart.jsx'
import Encabezado from './assets/Components/Header.jsx'
import ListaProductos from './assets/Components/ProductList.jsx'

function App() {
  return (
    <div className="app">
      <Encabezado />
      <main className="contenido">
        <ListaProductos />
        <Carrito />
      </main>
    </div>
  )
}

export default App
