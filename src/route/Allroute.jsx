import { Routes, Route } from "react-router-dom";
import { PledgeForm } from "../pages/PledgeForm";
import { Certificate } from "../pages/Certificate";
import { Home } from "../pages/Home";
import { PledgeWall } from "../pages/PledgeWall"; 
import { PageNotFound } from "../pages/PageNotFound";

export const Allroute = () => {
  return (
    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="pledge" element={<PledgeForm />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="wall" element={<PledgeWall />} />
          <Route path="*" element={<PageNotFound />} /> 
    </Routes>
  )
}