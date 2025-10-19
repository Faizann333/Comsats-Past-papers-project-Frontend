import { createBrowserRouter } from "react-router-dom"
import App from '../App.jsx'
import PastPapers from '../pages/PastPapers.jsx'
import UploadPaper from '../pages/UploadPaper.jsx'
import Home from '../pages/Home.jsx'
import Approval from '../components/Approval.jsx'
import MeetAdmin from "../components/MeetAdmin.jsx"
import PortFolio from "../components/PortFolio.jsx"
import UploadReview from "../pages/UploadReview.jsx"
import Reviews from "../pages/Reviews.jsx"
import Contributions from "../pages/Contributions.jsx"
import Login from "../pages/Login.jsx"
import SignUp from "../pages/SignUp.jsx"

//Admin Components 

import Dashboard from "../pages/Admin/Dashboard.jsx"

import ProtectedRoute from "./ProtectedRoute.jsx"
import AdminUsers from "../pages/Admin/Users.jsx"
import AdminReviews from "../pages/Admin/Reviews.jsx"
import AdminPapers from "../pages/Admin/Papers.jsx"


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element:<ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: "/Past-Papers", element: <ProtectedRoute> <PastPapers /></ProtectedRoute> },
      { path: "/reviews", element:  <ProtectedRoute> <Reviews /></ProtectedRoute> },
      { path: "/upload/paper", element: <ProtectedRoute><UploadPaper /></ProtectedRoute> },
      { path: "/upload/review", element: <ProtectedRoute><UploadReview /> </ProtectedRoute>},
      { path: "/upload/paper/approval", element:<ProtectedRoute> <Approval /></ProtectedRoute> },
      { path: "/meet-admin", element: <ProtectedRoute> <MeetAdmin /></ProtectedRoute>},
      { path: "/meet-admin/portfolio", element:  <ProtectedRoute><PortFolio /></ProtectedRoute>},
      { path: "/contributions", element:  <ProtectedRoute><Contributions /></ProtectedRoute>},
      { path: "/login", element: <Login />},
      { path: "/signup", element: <SignUp />},


      //Admin panel  paths
      {path: "/admin/dashboard", element: <Dashboard/> },
      {path: "/admin/users", element: <AdminUsers/> },
      {path: "/admin/reviews", element: <AdminReviews/> },
      {path: "/admin/papers", element: <AdminPapers/> }
      

      
    ]
  },

])

export default router
