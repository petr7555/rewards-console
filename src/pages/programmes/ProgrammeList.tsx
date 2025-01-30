import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

const ProgrammeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <DateField source="start_date" />
      <DateField source="end_date" />
      <ReferenceField source="reward_id" reference="rewards" />
    </Datagrid>
  </List>
);

export default ProgrammeList;
