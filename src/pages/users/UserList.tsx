import { Datagrid, EmailField, List, TextField } from 'react-admin';

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export default UserList;
