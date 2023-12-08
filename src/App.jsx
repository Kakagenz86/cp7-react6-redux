import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginPages from "./pages/login"
import Menu from "./pages/Menu"
import CreateMenu from "./pages/CreateMenu"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/create-menu" element={<CreateMenu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
