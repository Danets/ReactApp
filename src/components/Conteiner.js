import { connect } from 'react-redux'

import Person from './Person';
import actions from './actions';

export const getPerson = connect(
    state => ({
        persons: state.name
    }),
    dispatch => 
    ({
        getPerson() {
            dispatch(actions.getPerson)
        }
    }) 
)(Person)