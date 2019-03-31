import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStack, loadStacks } from '../actions';
import stacks from '../data/stacks.json';

export class StackListContainer extends Component {
  componentDidMount() {
    if(!this.props.stacks.length) {
      this.props.loadStacks(stacks);
    }
  }

  render() {
    return (
      <div>
        {this.props.stacks.map(stack => (
          <Link
            key={stack.id}
            to="/stack"
            onClick={() => this.props.setStack(stack)}
          >
            <h4>{stack.title}</h4>
          </Link>
        ))}
      </div>
    );
  }
} 
const mapStateToProps = state => ({
  stacks: state.stacks,
});

const mapDispatchToProps = {
  setStack,
  loadStacks
};

const enhancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const StackList = enhancer(StackListContainer);