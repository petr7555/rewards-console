import { Datagrid, DateField, List, ReferenceField, SelectField, TextField } from 'react-admin';
import { programmeTypes } from "./programmeTypes";

const ProgrammeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <SelectField source="type" choices={programmeTypes}/>
      <DateField source="start_date" />
      <DateField source="end_date" />
      <ReferenceField source="reward_id" reference="rewards" />
    </Datagrid>
  </List>
);

export default ProgrammeList;
