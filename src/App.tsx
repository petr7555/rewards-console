import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import UserList from './pages/users/UserList.tsx';
import RewardList from './pages/rewards/RewardList.tsx';
import ProgrammeList from './pages/programmes/ProgrammeList.tsx';

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="programmes"
      list={ProgrammeList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="rewards"
      list={RewardList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
