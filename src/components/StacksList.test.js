import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackListContainer } from './StacksList';
import data from '../data/stacks.json';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('StackList', () => {
  const stackList = shallow(<StackListContainer stacks={data} />);

  it('renderers stacklist', () => {
    expect(stackList.find('Link h4').length).toEqual(data.length);
  });
});