import { saveComment } from "../../actions";
import { SAVE_COMMENT } from "../types";

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
        const sampleComment = 'New Comment';
        const action = saveComment(sampleComment);

        expect(action.payload).toEqual(sampleComment);
    });
});