import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EnregistrementProfilParrain  from "./EnregistrementProfilParrain"


function Router() {
return(
        <div> 
        <BrowserRouter>
    <Routes>
    
        
        <Route path="/enregis" element={<EnregistrementProfilParrain />}/>
        
    </ Routes>
        </BrowserRouter>
        </div>
    )
}
export default Router;