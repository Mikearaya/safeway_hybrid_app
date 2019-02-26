import {
    DangerZone
} from 'expo';
const {
    Localization
} = DangerZone;

const localizationString = {
    afan_oromo: {
        HomeScreen: {
            title: 'kotu'
        }
    },
    amharic: {
        HomeScreen: {
            title: 'selam new'
        }
    },
    english: {
        HomeScreen: {
            title: 'hello'
        }
    },
    tigrigna: {
        HomeScreen: {
            title: 'dehndiy'
        }

    }
}

const localeStore = new Localization.LocaleStore(localizationString)
export default localeStore;