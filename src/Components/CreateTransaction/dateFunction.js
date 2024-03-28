export const dates = () => {

    const dateObj = new Date();
    const month = dateObj.getMonth();
    let hours = dateObj.getHours()
    let minutes = dateObj.getMinutes()
    let monthName

    switch (month) {
        case 0: monthName = 'Jan';
            break;
        case 1: monthName = 'Feb';
            break;
        case 2: monthName = 'Mar';
            break;
        case 3: monthName = 'Apr';
            break;
        case 4: monthName = 'May';
            break;
        case 5: monthName = 'Jun';
            break;
        case 6: monthName = 'Jul';
            break;
        case 7: monthName = 'Aug';
            break;
        case 8: monthName = 'Sep';
            break;
        case 9: monthName = 'Oct';
            break;
        case 10: monthName = 'Nav';
            break;
        case 11: monthName = 'Des';
            break;
    }
    const date = `${monthName} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${hours}:${minutes}]`
    return date
}
