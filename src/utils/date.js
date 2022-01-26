export function getDate(ISOdate) {
    const d = new Date(ISOdate);
    return d.toDateString()
} 

export function getTime(ISOdate) {
    const d = new Date(ISOdate);
    return d.toLocaleTimeString()
} 