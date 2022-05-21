export interface IAddress {
    address: string;
    city: string;
    postalCode: string;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    address: IAddress;
}

export interface ITodo {
    id: number,
    title: string;
    completed: boolean;
}