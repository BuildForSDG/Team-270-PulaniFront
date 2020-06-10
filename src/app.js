import React from 'react';
import { Admin, fetchUtils, Resource } from 'react-admin';

import dataProvider from './dataProvider';
import authProvider from './authProvider';
import i18nProvider from './i18n';
import { PulaniLayout } from './layout';
import PulaniLoginPage from './login';
import { PostCreate } from './register';
const App = () => {
  const [data, setData] = React.useState(null);

  const fetchDataProvider = async () => {
    const httpClient = (url, options) => {
      if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
      }
      const token = sessionStorage.getItem('token');
      options.headers.set('Authorization', `Bearer ${token}`);
      return fetchUtils.fetchJson(url, options);
    };

    let dataProviderInstance = await dataProvider(process.env.REACT_APP_HEROKU, httpClient);

    setData(
      // NOTE: dataProviderInstance can be a function
      () => dataProviderInstance
    );
  };

  React.useEffect(() => {
    fetchDataProvider();
    // cleanup
    return () => fetchDataProvider();
  }, []);

  if (!data) {
    return (
      <div className="loader-container">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <Admin
      title=""
      dataProvider={data}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      layout={PulaniLayout}
      loginPage={PulaniLoginPage}
    >
      <Resource name="users" create={PostCreate} />
    </Admin>
  );
};

export default App;
