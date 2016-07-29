import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SubpageView from '../SubpageView';

describe('SubpageView', () => {
  const getData = () => {};
  const data = {
    key1: 'value1',
    key2: 'value2',
  };

  it('should display title', () => {
    const component = shallow(<SubpageView getData={getData} data={data} />);
    const title = component.find('h2');
    expect(title.length).to.equal(1);
    expect(title.text()).to.equal('Subpage');
  });

  it('should display list key:value of passed object', () => {
    const component = shallow(<SubpageView getData={getData} data={data} />);
    const list = component.find('.list-item');
    expect(list.length).to.equal(2);
    expect(list.at(0).text()).to.equal('key1 - value1');
    expect(list.at(1).text()).to.equal('key2 - value2');
  });
});