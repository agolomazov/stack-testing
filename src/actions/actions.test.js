import {
  setStack,
  loadStacks,
  addStack,
  LOAD_STACKS,
  SET_STACK,
  ADD_STACK,
} from './index';
import data from '../data/stacks.json';

const stack = data[0];

describe('actions', () => {
  it('creates an action to set the main stack', () => {
    const expectedAction = {
      type: SET_STACK,
      stack
    };

    expect(setStack(stack)).toEqual(expectedAction);
  });

  it('add an action to include the main stack', () => {
    const expectedAction = {
      type: ADD_STACK,
      stack
    };

    expect(addStack(stack)).toEqual(expectedAction);
  });

  it('load an action to set main stack', () => {
    const expectedAction = {
      type: LOAD_STACKS,
      stacks: data,
    };

    expect(loadStacks(data)).toEqual(expectedAction);
  })
});