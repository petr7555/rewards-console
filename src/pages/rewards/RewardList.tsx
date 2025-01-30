import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

const RewardList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="user_id" reference="users" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export default RewardList;
