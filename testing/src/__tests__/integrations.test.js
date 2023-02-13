import React from "react";
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../root';
import App from '../components/App';

beforeEach(() => {
     // turn off any requests by axios
    moxios.install();
    // intercept call and respond with mock data
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        // returned mocked object
        status: 200,
        response: [
            { name: 'Fetched #1' },
            { name: 'Fetched #2' }
        ]
    });
});

afterEach(() => {
    // clean up to prevent stubbing any other requests
    moxios.uninstall();
});

it('can fetch a list of comments and display them', () => {
    // Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // Find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments-btn').simulate('click');

    // Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(2);
})