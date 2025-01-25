import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Login from "./Login"

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen ">
        <Navbar />
        <Login />
        <Outlet/>
        <Footer />

    </div>
  )
}
export default Body
