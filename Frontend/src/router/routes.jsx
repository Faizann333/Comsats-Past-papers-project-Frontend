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


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Past-Papers", element: <PastPapers /> },
      { path: "/reviews", element: <Reviews />},
      { path: "/upload/paper", element: <UploadPaper /> },
      { path: "/upload/review", element: <UploadReview /> },
      { path: "/upload/paper/approval", element: <Approval /> },
      { path: "/meet-admin", element: <MeetAdmin />},
      { path: "/meet-admin/portfolio", element: <PortFolio />},
      { path: "/contributions", element: <Contributions />},
      { path: "/login", element: <Login />},
      { path: "/signup", element: <SignUp />},

      
    ]
  },

])

export default router
