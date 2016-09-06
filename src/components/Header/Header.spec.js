import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Header from './Header'
import styles from './styles.module.css'

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  });

  it('contains a title component', () => {
    expect(wrapper.find('h1').first().text())
        .to.equal('client')
  });

})
