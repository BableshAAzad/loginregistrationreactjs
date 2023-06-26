import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/auth/LoginReg";
import SendPasswordResetEmail from "./components/auth/SendPasswordResetEmail";
import ResetPassword from "./components/auth/ResetPassword";
import Dashboard from "./components/pages/Dashboard";
import YoutubeData from "./components/YoutubeData";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout></Layout>}>
             <Route index element={<Home/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="login" element={<LoginReg/>}/>
             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail/>}></Route>
             <Route path='reset' element={<ResetPassword/>}></Route>
          </Route>
          <Route path='/youtubeData' element={<YoutubeData></YoutubeData>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<h1>Error 404 Page Not Found!!!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
