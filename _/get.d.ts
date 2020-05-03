interface get {
    <T extends Object>(key: string): (obj: T | any) => any;
    <T extends Object>(key: string, obj: T | any): any;
}
export declare const get: get;
export {};
