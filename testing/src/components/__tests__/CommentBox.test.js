import React from "react";
import { mount } from 'enzyme';

import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

/**
 * Simulating event:
 * 1. Find the textarea element
 * 2. Simulate a 'change' event
 * 3. Provide a fake event object
 * 4. Force the component to update
 * 5. Assert that the textarea's value has changed
 */

it('has a text area that users can type in', () => {
    const simulatedValue = 'new comment';
    wrapped.find('textarea').simulate('change', {
        target: { value: simulatedValue }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual(simulatedValue);
});

it('when form is submitted, text area gets emptied', () => {
    const simulatedValue = 'new comment';
    wrapped.find('textarea').simulate('change', {
        target: { value: simulatedValue }
    });
    wrapped.update();

    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
})