export interface ICNDBResponseValue {
    id: number;
    joke: string;
    categories: any[];
}

export interface ICNDBResponse {
    type: string;
    value: ICNDBResponseValue;
}
