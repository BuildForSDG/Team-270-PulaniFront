import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = (props) => (
  <Create title="Register" {...props}>
    <SimpleForm>
      <TextInput source="Full Name" />
      <TextInput source="ID Number" />
      <TextInput source="Phone Number" />
      <TextInput source="Gender" />
      <TextInput source="Location" />
      <TextInput source="Business Name" />
      <TextInput source="Business Location" />
      <TextInput source="Business Type" />
    </SimpleForm>
  </Create>
);
