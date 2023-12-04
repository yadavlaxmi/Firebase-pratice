import {Routes,Route} from "react-router-dom"
import MyNavbar from "./Project-component/Navbar";
import RegisterPage from "./project-pages/Register";
import LoginPage from "./project-pages/Login";
import ListingPage from "./project-pages/List";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
const App=()=>{
  return(
  <>
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/book/list" element={<ListingPage/>}/>

  </Routes>
  </>
  )
}
export default App
