import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from './App';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('App', () => {
  const app = shallow(<App />);

  it('renders the `Flashcard Pro` Title', () => {
    expect(app.find('h2').text()).toEqual('Flashcard Pro');  
  });

  it('renders a link to create new stacks', () => {
    expect(app.find('Link h4').text()).toEqual('Create a New Stack')
  });

  it('renders the Stacklist', () => {
    // console.log(app.debug());
    expect(app.find('Connect(StackListContainer)').exists()).toBe(true);
  });
});