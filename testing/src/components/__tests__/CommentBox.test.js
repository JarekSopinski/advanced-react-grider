import React from "react";
import { mount } from 'enzyme';

import CommentBox from "../CommentBox";
import Root from '../../root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

/**
 * Simulating event:
 * 1. Find the textarea element
 * 2. Simulate a 'change' event
 * 3. Provide a fake event object
 * 4. Force the component to update
 * 5. Assert that the textarea's value has changed
 */

describe('the text area', () => {

    const simulatedValue = 'new comment';

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: simulatedValue }
        });
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(simulatedValue);
    });

    it('when form is submitted, text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});