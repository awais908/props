
import './App.css'
import Main from './assets/Main'
import Props from './assets/Props'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Signin from './assets/Signin'
import Navbar from './assets/component/Navbar'
function App() {
  

  return (
    <>
    <Navbar/>
     <Main/>
     <Props/>
     <Signin/>
    </>
  )
}

export default App
