import React from 'react';
import { LANG_RU } from '../../consts/generalConsts';

const Context = React.createContext({
    lang: LANG_RU,
    //
});

export default Context;

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
