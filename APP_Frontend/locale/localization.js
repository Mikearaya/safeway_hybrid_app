import {
    DangerZone
} from 'expo';
const {
    Localization
} = DangerZone;

const localizationString = {
    afan_oromo: {
        NewsScreen: {
            title: 'Oduu'
        },
        NewsDetailScreen: {
            title: 'Bal\'ina Oduu'
        },

        GeneralInfoScreen: {
            title: 'Qarqaarsa'
        },
        Menu: 'Bahiinsa',
        Settings: '',
        Spelling: 'Afaan oromoo',
        ForumScreen: {
            title: 'Haasawa'
        },
        ForumDetail: {
            title: 'Haasawa'
        },
        Language: 'lugga',
        Select_language: 'Lugaa filadhu',
        SideBar: {
            News: 'Oduu',
            Forum: 'Haasawa',
            Help: 'Helpful information',
            Language: 'Language'
        }
    },
    amharic: {
        NewsScreen: {
            title: 'News (Amharic)'
        },
        NewsDetailScreen: {
            title: 'News detail (Amharic)'
        },
        GeneralInfoScreen: {
            title: 'Helpful informations (Amharic)'
        },
        Menu: 'Menu (Amharic)',
        Settings: 'Settings (Amharic)',
        Spelling: 'Amharic (Amharic)',
        ForumScreen: {
            title: 'Forums (Amharic)'
        },
        ForumDetail: {
            title: 'Wiyiyit'
        },
        Language: 'Language',
        Select_language: 'Select language (Amharic)',
        SideBar: {
            News: 'Oduu',
            Forum: 'Haasawa',
            Help: 'Helpful information',
            Language: 'Language'
        }
    },
    english: {
        NewsScreen: {
            title: 'News'
        },
        NewsDetailScreen: {
            title: 'News detail'
        },
        GeneralInfoScreen: {
            title: 'Helpful informations'
        },
        Menu: 'Menu',
        Settings: 'Settings',
        Spelling: 'English',
        ForumScreen: {
            title: 'Forums'
        },
        ForumDetail: {
            title: 'Forum detail'
        },
        Language: 'Language',
        Select_language: 'Select language',
        SideBar: {
            News: 'Oduu',
            Forum: 'Haasawa',
            Help: 'Helpful information',
            Language: 'Language'
        }
    },
    tigrigna: {
        NewsScreen: {
            title: 'News (tigigna)'
        },
        NewsDetailScreen: {
            title: 'News detail (tigigna)'
        },
        GeneralInfoScreen: {
            title: 'Helpful informations (tigigna)'
        },
        Menu: 'Menu (tigigna)',
        Settings: 'Settings (tigigna)',
        Spelling: 'Tigrigna (tigigna)',
        ForumScreen: {
            title: 'Forums (tigigna)'
        },
        ForumDetail: {
            title: 'forum detail (tigrigna)'
        },
        Language: 'Language',
        Select_language: 'Select language (tigigna)',
        SideBar: {
            News: 'Oduu',
            Forum: 'Haasawa',
            Help: 'Helpful information',
            Language: 'Language'
        }

    }
}

const localeStore = new Localization.LocaleStore(localizationString)
export default localeStore;