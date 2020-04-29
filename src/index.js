import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';


// 1 - Apollo imports
import { createHttpLink } from 'apollo-link-http'


// 2 - Create httpLink object with graphQL endpoint URI
// httpLink will connect to your ApolloClient instance
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});


// 3 - Instanciate apollo client with http link and a new instance of InMemoryCache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


// 4 - Wrap the app with HOC ApolloProvider that gets passed the apollo client as a prop
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
