import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const client = new ApolloClient({ 
  uri: 'http://localhost:4000/', 
  cache: new InMemoryCache() 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);