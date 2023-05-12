import { Routes, Route } from "react-router-dom";
import { NotExists } from "./modules/pages/notexists";
import { Dashboard } from "./modules/pages/domestic-animals/Dashboard/Dashboard";
import { HomelyFriendForm } from "./modules/pages/domestic-animals/Homely-Friends-Form";
import { HomelyFriendInfos } from "./modules/pages/domestic-animals/Homely-Friends-Infos";


export const DirectoryPaths = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotExists />} />
      <Route path="/animal/:_id" element={<HomelyFriendInfos/>}/>
        <Route path="/animal/:_id/edit" element={<HomelyFriendForm/>} />
        <Route path="/animal/new" element={<HomelyFriendForm />} />
        
    </Routes>
  );
};
