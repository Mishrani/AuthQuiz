import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthQuiz from './AuthQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'wikimedia commons',
    books: ['The Adventures of Huckelberry Finn']
  }
]

const state = {
  turnData: {
  author: authors[0],
  books: authors[0]}
};

ReactDOM.render(
  <React.StrictMode>
    <AuthQuiz {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
