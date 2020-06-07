import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = (props) => (
  <Create title="Daily Data" {...props}>
    <SimpleForm>
      <TextInput source="Capital" />
      <TextInput source="Income" />
      <TextInput source="Transport" />
      <TextInput source="Other Expenses" />
      <TextInput source="Savings" />
    </SimpleForm>
  </Create>
);
