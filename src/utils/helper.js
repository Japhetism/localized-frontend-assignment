import moment from 'moment';

export const getStringFirstLetter = (string) => {
    return string.charAt(0)
}

export const formatDate = (date) => {
    return moment(date).format("MMM DD, YYYY");
}