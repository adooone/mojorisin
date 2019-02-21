import {
    MODULE_HOME,
    MODULE_PHOTOS,
    MODULE_VIDEOS,
    MODULE_CONTACTS,
    MODULE_ABOUT,
} from '../consts/generalConsts';

const Modules = [
    {
        name: MODULE_HOME,
        path: '',
        icon: 'change_history',
        caption: 'modules.home',
    },
    {
        name: MODULE_PHOTOS,
        path: 'photos',
        icon: 'change_history',
        caption: 'modules.photos',
    },
    {
        name: MODULE_VIDEOS,
        path: 'videos',
        icon: 'change_history',
        caption: 'modules.videos',
    },
    {
        name: MODULE_CONTACTS,
        path: 'contacts',
        icon: 'change_history',
        caption: 'modules.contacts',
    },
    {
        name: MODULE_ABOUT,
        path: 'about',
        icon: 'change_history',
        caption: 'modules.about',
    },
];

export default Modules;
