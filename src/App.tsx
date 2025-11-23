import './App.css'
import { Routes, Route, Navigate} from "react-router-dom"
import  LoginPage  from "./pages/Login"




function App() {

  return (
    <>
    {/* Public routes with auth layout */}
    <Routes>
      <Route path='/'> element={<Navigate to="/login" replace />} </Route>
      <Route path='/login'> element={<LoginPage />} </Route>
    </Routes>
    </>
  )
}

export default App
