import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/router'
import Layout from './layout/Layout'
function App() {

  return (
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  )
}

export default App
