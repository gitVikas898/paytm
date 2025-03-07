import './App.css'
import Landing from './pages/Landing'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Navbax from './components/Navbax'
import Dashboard from './pages/Dashboard'
function App() {
  

  return (
    <>
    <Navbax/>
    {/* {<Landing/>} */}
      {/* <Signup/>
      <Signin/>
       */}
       <Dashboard/>
    </>
  )
}

export default App
