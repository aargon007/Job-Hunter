import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './conponents/Home'
import Statistics from './conponents/Statistics'
import AppliedJob from './conponents/AppliedJob'
import Blog from './conponents/Blog'
import JobDetails from './conponents/JobDetails'
import { getJobDetails } from './utilities/getJobDetails'
import { getJobDataFrmLocal } from './utilities/localDb'
import ErrorPage from './conponents/ErrorPage'
import Jobs from './conponents/Jobs'
import StartApplyBtn from './conponents/StartApplyBtn'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
      },
      {
        path : '/all-jobs',
        element : <StartApplyBtn></StartApplyBtn>
      },
      {
        path : '/job/:id',
        element : <JobDetails></JobDetails>,
        loader : ({params}) => {
          return getJobDetails(params.id)
        }
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path : '/applied-jobs',
        element : <AppliedJob></AppliedJob>,
        loader : getJobDataFrmLocal
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
