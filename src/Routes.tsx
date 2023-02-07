import { Routes, Route } from "react-router-dom";
import { Add_Domestic_Animal } from "./modules/pages/domestic-animals/add-domestic-animal"
import { Domestic_Animals } from "./modules/pages/domestic-animals/domestic_animals";
import { NotExists } from "./modules/pages/notexists";
import { Domestic_Animal_List_Detail } from "./modules/pages/domestic-animals/domestic_animal_detail";
import { Dashboard } from "./modules/pages/Dashboard";


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