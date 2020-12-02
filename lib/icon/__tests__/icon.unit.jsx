import Icon from '../index'
import renderer from 'react-test-renderer'
import * as React from "react";
import { mount } from 'enzyme';

describe('Icon', () => {
    it('input icon name', () => {
        const result = renderer.create(
            <Icon name='planet'/>
        ).toJSON()
        expect(result).toMatchSnapshot()
    })
    it('icon event', () => {
        const fn = jest.fn()
        const component = mount(<Icon name='planet' onClick={fn}/>)
        component.find('svg').simulate('click')
        expect(fn).toBeCalled()

    })
});