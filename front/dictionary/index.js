import lang from './lang';
import { LANG_EN } from '../consts/generalConsts';

export const dict = ((defLang) => {
    let curLang = null;

    const toggleLang = (language) => {
        curLang = language;
    };

    const translate = (word) => {
        return _.get(lang, `${ curLang || defLang }.${ word }`, word);
    };

    return {
        toggleLang,
        translate,
    };
})(LANG_EN);

export const getDict = (defLang) => {
    const translate = (word) => {
        return _.get(lang, `${ defLang }.${ word }`, word);
    };

    return { translate };
};
