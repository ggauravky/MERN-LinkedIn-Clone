import { Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/auth/SignUpPage"
import LoginPage from "./pages/auth/LoginPage"


function App() {

  return <Layout>
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
  </Layout>

}

export default App