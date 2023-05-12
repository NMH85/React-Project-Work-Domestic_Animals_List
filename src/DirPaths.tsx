import { Routes, Route } from "react-router-dom";
import { NotExists } from "./modules/pages/notexists";
import { Dashboard } from "./modules/pages/Homely-Friends/Dashboard/Dashboard";
import { HomelyFriendForm } from "./modules/pages/Homely-Friends/Homely-Friends-Form";
import { HomelyFriendInfos } from "./modules/pages/Homely-Friends/Homely-Friends-Infos";


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
