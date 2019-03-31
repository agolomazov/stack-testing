import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from './Card';

const mapStateToProps = state => ({
  stack: state.stack,
});

const enhancer = connect(mapStateToProps);

export const Stack = ({ stack }) => {
  return stack && (
      <div>
      <Link to="/" className="link-home">Home</Link>
        <h3>Stack - {stack.title}</h3>
        <br />
        {
          stack.cards && stack.cards.map((card, index) => (
            <Card key={card.id} card={card} tabIndex={index} />
          ))
        }
      </div>
    )
};

export const StackContainer = enhancer(Stack);