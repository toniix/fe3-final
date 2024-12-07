import Navabar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"
import { useContextGlobal } from "../Components/utils/global.context"

const Layout = () => {
  const { toggleTheme } = useContextGlobal();
  return (
    <div>
      <Navabar toggleTheme={toggleTheme}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
