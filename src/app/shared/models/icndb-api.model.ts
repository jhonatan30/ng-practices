export class ICNDBResponseValue {
    id: number;
    joke: string;
    categories: any[];
}

export class ICNDBResponse {
    type: string;
    value: ICNDBResponseValue;
}
