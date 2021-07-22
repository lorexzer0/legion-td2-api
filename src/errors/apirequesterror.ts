export class APIRequestError extends Error {
    private _data: {
        request: string;
        msg?: string,
        statusCode: number,
        data: any
    };

    constructor(data: {
        msg?: string,
        request: string;
        statusCode: number,
        data: any
    }) {
        if(!data.msg) {
            data.msg = "General API Request Error";
        }

        super(data.msg); 
        this._data = data;

        Object.setPrototypeOf(this, APIRequestError.prototype);
    }

    getRequest() {
        return this._data.request;
    }

    getStatusCode() {
        return this._data.statusCode;
    }

    getMessage() {
        return this._data.msg;
    }

    getData() {
        return this._data.data;
    }
}