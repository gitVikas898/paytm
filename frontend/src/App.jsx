import './App.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/Router'
import Layout from './layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initialisedAuth } from './store/userSlice'
function App() {

  const dispatch = useDispatch();
  const isAuthReady = useSelector((state)=>state?.user?.isAuthReady)

  useEffect(()=>{
    dispatch(initialisedAuth());
  },[dispatch]);

  if(!isAuthReady){
    return(
      <div>
        <p>Loading....</p>
      </div>
    )
  }

  return (
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  )
}

export default App
