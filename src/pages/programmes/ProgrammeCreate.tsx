import { Create, DateInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { programmeTypes } from "./programmeTypes.ts";

const ProgrammeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="type" choices={programmeTypes}/>
      <DateInput source="start_date"/>
      <DateInput source="end_date"/>
      <ReferenceInput source="reward_id" reference="rewards"/>
    </SimpleForm>
  </Create>
);

export default ProgrammeCreate;
