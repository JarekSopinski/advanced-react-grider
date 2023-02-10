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