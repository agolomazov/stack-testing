import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from './Card';
import data from '../data/stacks.json';

Enzyme.configure({
  adapter: new Adapter(),
});

const card = data[0].cards[0];
const props = { card, tabIndex: 0 };

describe('Card', () => {
  const cardComponent = shallow(<Card {...props} />);
  
  it('Рендер компонента Card', () => {
    expect(cardComponent.state().reveal).toBe(false);
  });

  it('Рендер заголовка карточки', () => {
    expect(cardComponent.find('.card-prompt h4').text()).toEqual(props.card.prompt);
  });

  it('Рендер ответа на карточке', () => {
    expect(cardComponent.find('.card-answer h4').text()).toEqual(props.card.answer);
  });

  describe('Пока ответа на карточке', () => {
    it('Ответ пока что скрыт от пользователя', () => {
      expect(cardComponent.find('.card-answer h4').hasClass('text-hidden')).toBe(true);
    });

    describe('Поведение показа ответа', () => {
      beforeEach(() => {
        cardComponent.simulate('click');
      });

      afterEach(() => {
        cardComponent.setState({ reveal: false });
      });

      it('Ответ каротчки должен быть виден пользователю', () => {
        expect(cardComponent.find('.card-answer h4').hasClass('text-revealed')).toBe(true);
      });
    });
  });
});