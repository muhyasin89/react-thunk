import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./page/dashboard";
import Login from "./page/login";
import ProjectDetail from "./page/projects/detail";
import Projects from "./page/projects/lists";
import NewProject from "./page/projects/new";
import Register from "./page/register";
import Detail from "./page/users/detail";
import Users from "./page/users/list";
import Profile from "./page/users/profile";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard/>} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Detail />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path=":projectId" element={<ProjectDetail />} />
              <Route path="new" element={<NewProject />} />
            </Route>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
