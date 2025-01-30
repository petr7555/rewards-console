import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  SelectField,
  TextField,
} from "react-admin";
import { statusTypes } from "./statusTypes.ts";

const RewardList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField source="user_id" reference="users" />
      <SelectField source="status" choices={statusTypes} />
      <DateField source="updated_at" showTime />
    </Datagrid>
  </List>
);

export default RewardList;
