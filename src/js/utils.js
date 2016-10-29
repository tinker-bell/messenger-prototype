export function getDateOnly(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

export function toDateString(date){
    return date.getDate() + " " + date.toLocaleString("en-us", { month: "long" });
}

export function toTimeString(date){
    var options = { hour: "2-digit", minute: "2-digit"};
    return date.toLocaleTimeString("en-us", options)
}

export function isEqualDates(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}