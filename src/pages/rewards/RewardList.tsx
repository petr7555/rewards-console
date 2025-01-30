import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  SelectField,
  TextField,
  TextInput,
} from "react-admin";
import { statusTypes } from "./statusTypes.ts";

const RewardList = () => {
  const rewardFilters = [
    <TextInput
      key="user_email_filter"
      source="user_email"
      alwaysOn
      label="User email"
    />,
    <TextInput
      key="user_id_filter"
      source="user_email"
      alwaysOn
      label="User ID"
    />,
  ];

  return (
    <List filters={rewardFilters}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceField source="user_id" reference="users" />
        <SelectField source="status" choices={statusTypes} />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  );
};

export default RewardList;
