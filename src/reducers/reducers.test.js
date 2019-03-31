import {
  setStack,
  loadStacks,
  addStack,
  LOAD_STACKS,
  SET_STACK,
  ADD_STACK,
} from '../actions';
import { stackReducer, stacksReducer } from './index';
import data from '../data/stacks.json';

const stack = data[0];

describe('stackReducer', () => {
  it('set_stack action', () => {
    const expectedData = { ...stack };
    expect(stackReducer({}, setStack(stack))).toEqual(expectedData);
  });

  it('test with undefined action type', () => {
    const expectedData = {};
    const action = {
      type: 'SOMEBODY_ACTION',
      stack
    };

    expect(stackReducer(expectedData, action)).toEqual(expectedData);
  })
});

describe('stacksReducer', () => {
  it('testing load_stacks case', () => {
    const expectedData = data;
    expect(stacksReducer([], loadStacks(data))).toEqual(expectedData);
  });

  it('add new stack', () => {
    const addedStack = {
      title: 'super stack',
      cards: []
    };

    const newStack = {
      id: data.length,
      ...addStack,
    };

    const expectedData = [...data, newStack];
    expect(stacksReducer(data, addStack(newStack))).toEqual(expectedData);
  });

  it('testing SOME_ACTION', () => {
    expect(stacksReducer(data, {
      type: 'SOME_ACTION',
      stack: {}
    })).toEqual(data);
  });
});