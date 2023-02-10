import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it('handles actions of type SAVE_COMMENT', () => {
    const sampleComment = 'New Comment';
    const action = {
        type: SAVE_COMMENT,
        payload: sampleComment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([sampleComment]);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type: 'THIS_ACTION_DOES_NOT_EXISTS' });

    expect(newState).toEqual([]);
});