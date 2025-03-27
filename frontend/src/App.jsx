import Router from "./router/Router.jsx";
import "./App.css";
import { BrowserRouter } from "react-router";

import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Budlista from "./components/Budlista/BudLista.jsx";


function App() {
  return (
<<<<<<< HEAD
    <>

    <Header/>
    <Budlista/>
    
   <Footer/>

      {/* <Router /> */}
    </>
=======
    <BrowserRouter>
      <Router />
    </BrowserRouter>
>>>>>>> df44f5afdaaf927bf012f771b7295829b844a90b
  )
}

export default App
