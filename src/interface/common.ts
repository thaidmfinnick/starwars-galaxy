
export interface Obj {
    [key: string]: {} | undefined | null;
}

export interface Action {
    type: string,
    payload?: any
}