// @flow

import { createReducer } from 'redux-create-reducer';

import { getClientLanguage, setClientLanguage } from 'utils/store';
import { UPDATE_LANGUAGE } from './actions';

const availableLanguages = [
    { code: 'fi', name: 'Suomi' }, 
    { code: 'sv', name: 'Svenska' },
    { code: 'en', name: 'English' },
];

const initialState = {
    language: getClientLanguage() || 'fi',
    availableLanguages,
};

export default createReducer(initialState, {
    [UPDATE_LANGUAGE](state, { language }) {
        setClientLanguage(language);

        return Object.assign({}, state, { language });
    },
});