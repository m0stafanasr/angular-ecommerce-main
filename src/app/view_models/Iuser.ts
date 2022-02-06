export interface Iuser{
    id:number,
    username:string,
    password: string,
    email:string,
    phones: string[],
    address:{
        city: string,
        street: string,
        postalCode: string
    }
    delivery: string,
    day?: string
}