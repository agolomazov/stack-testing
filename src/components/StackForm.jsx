import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStack } from '../actions';
import {
  Form,
  Button
} from 'react-bootstrap';

export class StackFormComponent extends Component {
  state = {
    title: '',
    cards: [],
  };

  handleOnAddCard = () => {
    const { cards } = this.state;
    const newCards = [...cards, {
      id: cards.length,
      prompt: '',
      answer: ''
    }];
    this.setState({ cards: newCards });
  };

  handleChangeTitle = event => {
    this.setState({title: event.target.value});
  };

  handleUpdateCard = (event, index, part) => {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  handleOnSave = () => {
    const { onSave, history: { push } } = this.props;
    onSave(this.state);
    push('/');
  }

  render() {
    const {
      title,
      cards
    } = this.state;
    return (
      <div>
        <Link to='/' className='link-home'><h4>Home</h4></Link>
        <h4>Create a New Stack</h4>
        <br/>
        <Form inline>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            {' '}
            <Form.Control
              type="text"
              value={title}
              onChange={this.handleChangeTitle}
              placeholder="Title stack"
              />
          </Form.Group>
          {
            cards.map((card, index) => (
              <div key={card.id}>
                <br/>
                <Form.Group>
                  <Form.Label>Prompt:</Form.Label>
                  {' '}
                  <Form.Control
                    type="text"
                    onChange={event => this.handleUpdateCard(event, index, 'prompt')} />{' '}{' '}
                  <Form.Label>Answer:</Form.Label>
                  {' '}
                  <Form.Control
                    type="text"
                    onChange={event => this.handleUpdateCard(event, index, 'answer')}
                    />
                </Form.Group>
              </div>
            ))
          }
        </Form>
        <br />
        <Button onClick={this.handleOnAddCard} variant="primary">Add Card</Button>
        {' '}
        <Button onClick={this.handleOnSave} variant="success">Save and Add the Stack</Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onSave: stack => addStack(stack)
};

export const StackForm = withRouter(
  connect(
    null, 
    mapDispatchToProps
  )(StackFormComponent)
);