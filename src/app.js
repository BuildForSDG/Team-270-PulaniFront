import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './AuthProvider';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => <Admin authProvider={authProvider} dataProvider={dataProvider} />;

export default App;
