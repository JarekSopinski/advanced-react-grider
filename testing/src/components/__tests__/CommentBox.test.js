import React from "react";
import { mount } from 'enzyme';

import CommentBox from "../CommentBox";

it('has a text area and a button', () => {
    const wrapped = mount(<CommentBox />);

    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));
})