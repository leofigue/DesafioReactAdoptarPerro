import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MyCard from './components/MyCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='containerDiv'>
        <MyCard imagen="https://hvc.cat/wp-content/uploads/2020/12/adopcion-ppp-adoptar-perros-de-razas-potencialmente-peligrosas.jpg" nombre="Bartolo" texto="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!" bgColor="success" textoB="Pitbull"></MyCard>
        <MyCard imagen="https://resources.uss.cl/upload/2022/05/beneficios-adoptar-a-un-perro.jpg" nombre="Messi" texto="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!" bgColor="primary" textoB="Mestizo"></MyCard>
        <MyCard imagen="./perro_uno.jpg" nombre="Gohan" texto="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimienta un amor incondicional!" bgColor="danger" textoB="Weimaraner"></MyCard>
        <MyCard imagen="./perro_dos.jpg" nombre="Princesa" texto="Es una compañera leal y cariñosa que adora los mimos y los abrazos ¡Ayuda a Princesa a econtrar su final feliz!" bgColor="warning" textoB="Bichón Maltés"></MyCard>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

