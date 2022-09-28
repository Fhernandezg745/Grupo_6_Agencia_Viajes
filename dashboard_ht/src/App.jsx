import './App.css'
import NombreClase from './components/NombreClase'


function App() {
  let alumnos =['Juan','Marino','Pepe','Tito','Esteban']
  return (
    <>
      {alumnos.map(alumno => 
      <NombreClase nombre = {alumno}/>
      )}
    </>
  )
}

export default App
