import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

const RewardList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="user_id" reference="users" />
      <TextField source="status" />
    </Datagrid>
  </List>
);

export default RewardList;
