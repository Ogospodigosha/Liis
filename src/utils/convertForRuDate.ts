export function convertForRuDate(checkIn:string){
    let date = new Date(checkIn)
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    // @ts-ignore
    let newDate = date.toLocaleString("ru", options).slice(0, -3);
    return newDate
}