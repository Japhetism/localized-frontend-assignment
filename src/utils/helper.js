import moment from 'moment';

export const getStringFirstLetter = (string) => {
    return string.charAt(0)
}

export const formatDate = (date) => {
    return moment(date).format("MMM DD, YYYY");
}

export const storeData = (storeType, data) => {
    localStorage.setItem(storeType, JSON.stringify(data));
}

export const retrieveData = (retrieveType) => {
    return JSON.parse(localStorage.getItem(retrieveType) || null);
}