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

it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the *entire* app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // Find the 'fetchComments' button and click it
    wrapped.find('.fetch-comments-btn').simulate('click');

    // Introduce a *pause* for async action
    moxios.wait(() => {
        // we must tell our app to update itself
        wrapped.update();

        // do the actual expectation
        expect(wrapped.find('li').length).toEqual(2);

        done(); // test checks only after done() function is called
        wrapped.unmount(); // cleanup
    });
});