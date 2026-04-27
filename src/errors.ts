export interface PalDefenderApiErrorData {
    statusCode: number;
    method: string;
    path: string;
    responseBody?: unknown;
}

export class PalDefenderApiError extends Error {
    public readonly statusCode: number;
    public readonly method: string;
    public readonly path: string;
    public readonly responseBody?: unknown;

    constructor(message: string, data: PalDefenderApiErrorData) {
        super(message);
        this.name = 'PalDefenderApiError';
        this.statusCode = data.statusCode;
        this.method = data.method;
        this.path = data.path;
        this.responseBody = data.responseBody;

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, PalDefenderApiError);
        }
    }
}