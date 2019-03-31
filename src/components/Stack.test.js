import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { Stack } from './Stack';
import data from '../data/stacks.json';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('Stack', () => {
  const stack = shallow(<Stack stack={data[0]} />);

  it('renders stack title', () => {
    expect(stack.find('h3').text()).to.equal(`Stack - ${data[0].title}`);
  });
  
  it('renders cards stack', () => {
    expect(stack.find('Card')).to.have.lengthOf(data[0].cards.length);
  });

  it('renders link home', () => {
    expect(stack.find('Link.link-home')).to.have.lengthOf(1);
  });
});