import { Routes, Route } from "react-router-dom";
import { Domestic_Animals } from "./modules/pages/domestic-animals/domestic_animals";
import { NotExists } from "./modules/pages/notexists";
import { Dashboard } from "./modules/pages/domestic-animals/Dashboard/Dashboard";
import { DomesticAnimalForm } from "./modules/pages/domestic-animals/DomesticAnimalForm";
import { DomesticAnimalDetail } from "./modules/pages/domestic-animals/D_animal_list_detail"
import { EditDomesticAnimal } from "./modules/pages/domestic-animals/Edit-Domestic-Animal";
import { standardHomelyFriend } from "./utils/Utility.HomelyFriend";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotExists />} />
      <Route path="/animal">
        <Route path=":_id" element={<DomesticAnimalDetail/>}/>
        <Route path=":_id/edit" element={<EditDomesticAnimal />} />
        <Route path="new" element={<DomesticAnimalForm defaultValues={standardHomelyFriend} />} />
        </Route>
    </Routes>
  );
};