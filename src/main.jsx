import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Environments from './pages/Environments.jsx'
import Locations, { loader as locationsLoader } from './pages/Locations.jsx'
import CreateLocation, { action as createLocationAction } from './pages/CreateLocation.jsx'
import Location from './pages/Location.jsx'
import Login from './pages/Login.jsx'



/* PROJEKTI: Suositellaan router omaan tiedostoonsa */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/environments",
        element: <Environments></Environments>
      },
      {
        path: "/locations",
        element: <Locations></Locations>,
        loader: locationsLoader
      },
      {
        path: "/location/create",
        element: <CreateLocation></CreateLocation>,
        action: createLocationAction
      },
      {
        path: "/locations/:locationId",
        element: <Location></Location>,
        loader: async ({params})=>{
          return {locationId: params.locationId}
        }
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
