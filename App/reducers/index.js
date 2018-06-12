import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import RegistrationReducer from '../Registration/reducer'
const reducers = {
    form:formReducer,
    registration:RegistrationReducer
}

const allReducers = combineReducers(reducers)

export default allReducers