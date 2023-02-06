import { Routes, Route } from "react-router-dom";
import { Add_Domestic_Animal } from "./src/modules/pages/domestic-animals/add-domestic-animal"
import { Domestic_Animals } from "./src/modules/pages/domestic-animals/domestic_animals";
import { NotExists } from "./src/modules/pages/notexists";
import { Domestic_Animal_List_Detail } from "./src/modules/pages/domestic-animals/domestic_animal_detail";
import { Dashboard } from "./src/modules/pages/Dashboard";
import React from "react";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotExists />} />
      <Route path="/animal">
        <Route index element={<Domestic_Animals/>} />
        <Route path=":_id" element={<Domestic_Animal_List_Detail/>}/>

        (//vedi usedetails dalla repo )


        <Route path="new" element={<Add_Domestic_Animal/>} />
      </Route>
      (/**/)
    </Routes>
  );
};