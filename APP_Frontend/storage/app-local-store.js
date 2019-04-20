import React, {
    Component
} from 'react'
import {
    AsyncStorage
} from "react-native";



var setStoreItem = async (item, value) => {
    const stored = AsyncStorage.getItem(item);

    const storedObj = JSON.parse(stored);

    if (storedObj) {
        alert(JSON.stringify(storedObj));
        storedObj.push(value);
    } else {
        storedObj = value;
    }


    return storedObj;
}

var getStoreItem = async (item) => {
    return await JSON.parse(AsyncStorage.getItem(item));
}



module.exports = setStoreItem();