import React from "react";
import { mount } from 'enzyme';

import CommentList from "../CommentList";
import Root from '../../root';

let wrapped;
const testComments = ['Comment 1', 'Comment 2'];

beforeEach(() => {
    const initialState = {
        comments: testComments
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(testComments.length);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain(testComments[0]);
    expect(wrapped.render().text()).toContain(testComments[1]);
});