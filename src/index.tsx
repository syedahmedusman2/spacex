import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache()

})



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
    
  document.getElementById('root')
);

// If you want your app to 
