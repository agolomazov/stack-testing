import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackFormComponent } from './StackForm';
import data from '../data/stacks.json';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('StackForm', () => {
  const stackform = shallow(<StackFormComponent />);

  describe('test render StackForm', () => {
    it('Рендер заголовка `Create a New Stack`', () => {
      expect(stackform.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it('Рендер ссылки на главную страницу', () => {
      expect(stackform.find('h4').first().text()).toEqual('Home');
    });

    it('Рендер компонента формы', () => {
      expect(stackform.find('Form').exists()).toBe(true);
    });

    it('Рендер кнопки для добавления новой card', () => {
      expect(stackform.find('Button').at(0).text()).toEqual('Add Card');
    });

    it('Рендер кнопки submit', () => {
      expect(stackform.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
    });
  });

  describe('Тестируем поведение компонента StackForm', () => {
    beforeEach(() => {
      stackform.find('FormControl').simulate('change', { target: { value: 'changed value' } });
    });

    it('Что выводится в инпуте для названия Stack', () => {
      expect(stackform.find('FormControl').at(0).props().value).toEqual('changed value');
      expect(stackform.state().title).toEqual('changed value');
    });
  });

  describe('Поведение при добавлении новой карточки', () => {
    beforeEach(() => {
      stackform.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      stackform.setState({ cards: [] });
    });

    it('Вывод секции', () => {
      expect(stackform.state().cards.length).toEqual(1);
      expect(stackform.find('FormLabel').at(1).text()).toEqual('Prompt:');
      expect(stackform.find('FormLabel').at(2).text()).toEqual('Answer:');
    });

    describe('и обновляем card prompt', () => {
      beforeEach(() => {
        stackform.find('FormControl').at(1).simulate('change', { target: { value: 'change prompt value' } });
      });

      it('проверяем содержимое prompt', () => {
        expect(stackform.state().cards[0].prompt).toEqual('change prompt value');
      });
    });

    describe('и обновляем card answer', () => {
      beforeEach(() => {
        stackform.find('FormControl').at(2).simulate('change', { target: { value: 'change answer value' } });
      });

      it('проверяем содержимое answer', () => {
        expect(stackform.state().cards[0].answer).toEqual('change answer value');
      })
    });
  });
});