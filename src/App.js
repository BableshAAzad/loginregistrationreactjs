import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/auth/LoginReg";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
             <Route index element={<Home/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="loginreg" element={<LoginReg/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
