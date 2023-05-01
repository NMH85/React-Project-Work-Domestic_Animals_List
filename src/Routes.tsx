import { Routes, Route } from "react-router-dom";
import { NotExists } from "./modules/pages/notexists";
import { Dashboard } from "./modules/pages/domestic-animals/Dashboard/Dashboard";
import { Homely_Friend_Form } from "./modules/pages/domestic-animals/Homely_Friends_Form";
import { Homely_Friend_Infos } from "./modules/pages/domestic-animals/Homely_Friends_Infos";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotExists />} />
      <Route path="/animal/:_id" element={<Homely_Friend_Infos/>}/>
        <Route path="/animal/:_id/modify" element={<Homely_Friend_Form/>} />
        <Route path="/animal/new" element={<Homely_Friend_Form />} />
        
    </Routes>
  );
};