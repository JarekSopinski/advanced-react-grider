import tv4 from 'tv4'; // tiny validator library
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    /**
     * Validate state's schema only AFTER the action has gone through everything else.
     */
    const isStateValid = tv4.validate(getState(), stateSchema);
    if (!isStateValid) {
        console.warn('Invalid state schema detected!');
    }
};