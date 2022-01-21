export default interface button {
    text:string,
    type?:"button" | "submit" | "reset",
    disabled?:boolean,
    focused?:boolean,
}