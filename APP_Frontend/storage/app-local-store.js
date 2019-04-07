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

    AsyncStorage.setItem(item, JSON.stringify(storedObj)).then(() => {
            alert('stored')
        })
        .catch(() => {
            alert('There was an error saving the product');
        })
    return storedObj;
}

var getStoreItem = async (item) => {
    return await JSON.parse(AsyncStorage.getItem(item));
}



module.exports = setStoreItem();
module.exports = getStoreItem();