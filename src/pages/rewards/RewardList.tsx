import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectField,
  TextField,
  TextInput,
} from "react-admin";
import { statusTypes } from "./statusTypes.ts";
import StatusChangeButtons from "./StatusChangeButtons.tsx";

const RewardList = () => {
  const rewardFilters = [
    <ReferenceInput
      key="user_ref_filter"
      source="user_id"
      reference="users"
      alwaysOn
    />,
    <TextInput
      key="user_email_filter"
      source="user_email"
      alwaysOn
      label="User email"
    />,
    <TextInput
      key="user_id_filter"
      source="user_id"
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
        <DateField source="updated_at" showTime />
        <SelectField source="status" choices={statusTypes} />
        <StatusChangeButtons />
      </Datagrid>
    </List>
  );
};

export default RewardList;
