import React from 'react';
import { Link } from 'react-router-dom';
import { StackList } from './StacksList';

export const App = () => (
  <div>
    <h2>Flashcard Pro</h2>
    <hr />
    <StackList />
    <hr />
    
      <Link to='/stack-form'>
      <h4>
        Create a New Stack
      </h4>
      </Link>
  </div>
);
