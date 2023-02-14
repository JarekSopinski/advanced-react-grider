/**
export default function({ dispatch }) {
    return function(next) {
        return function(action) {

        }
    }
}
*/

export default ({ dispatch }) => next => action => {
    /**
     * Check to see if the action has a Promise on its 'payload' property.
     * If it does, than wait for it to resolve.
     * If it doesn't, then send the action on to the next middleware.
     */
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    /**
     * We want to wait for the promise to resolve (get its data)
     * and then create a new action with that data and dispatch it.
     * In other words, we overwrite payload/Promise with data returned from that Promise.
     */
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};