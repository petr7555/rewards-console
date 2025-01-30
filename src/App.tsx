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
import ProgrammeCreate from './pages/programmes/ProgrammeCreate.tsx';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import { defaultTheme } from 'react-admin';
import { deepmerge } from '@mui/utils';

const futureTheme = deepmerge(defaultTheme, {
  palette: {
    primary: {
      main: '#a71930',
    },
    secondary: {
      main: '#a71930',
    },
  },
});

export const App = () => (
  <Admin
    layout={Layout}
    theme={futureTheme}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="programmes"
      list={ProgrammeList}
      show={ShowGuesser}
      create={ProgrammeCreate}
    />
    <Resource
      name="rewards"
      list={RewardList}
      icon={EmojiEventsIcon}
    />
    <Resource
      name="users"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={PersonIcon}
    />
  </Admin>
);
