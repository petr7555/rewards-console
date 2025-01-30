import { Datagrid, EmailField, List, TextField } from 'react-admin';

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export default UserList;
