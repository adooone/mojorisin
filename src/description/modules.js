import {
    MODULE_HOME,
    MODULE_PHOTOS,
    MODULE_VIDEOS,
    MODULE_CONTACTS,
    MODULE_ABOUT,
    MODULE_TYPE_ICON,
    MODULE_ADMIN,
    MODULE_TYPE_TEXT,
} from '../consts/generalConsts';

const Modules = [
    {
        name: MODULE_HOME,
        type: MODULE_TYPE_ICON,
        path: '',
        icon: 'home',
        caption: 'modules.home',
    },
    {
        name: MODULE_ADMIN,
        type: MODULE_TYPE_ICON,
        path: 'admin',
        icon: 'settings',
        caption: 'modules.settings',
    },
    {
        name: MODULE_PHOTOS,
        type: MODULE_TYPE_TEXT,
        path: 'photos',
        icon: 'change_history',
        caption: 'modules.photos',
    },
    {
        name: MODULE_VIDEOS,
        type: MODULE_TYPE_TEXT,
        path: 'videos',
        icon: 'change_history',
        caption: 'modules.videos',
    },
    {
        name: MODULE_CONTACTS,
        type: MODULE_TYPE_TEXT,
        path: 'contacts',
        icon: 'change_history',
        caption: 'modules.contacts',
    },
    {
        name: MODULE_ABOUT,
        type: MODULE_TYPE_TEXT,
        path: 'about',
        icon: 'change_history',
        caption: 'modules.about',
    },
];

export default Modules;
