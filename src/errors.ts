/**
 * Raised when the PalDefender API returns an error response.
 * Mirrors Python's PalDefenderApiError.
 */
export class PalDefenderApiError extends Error {
    public readonly statusCode: number;
    public readonly method: string;
    public readonly path: string;
    public readonly responseBody: any;

    constructor(
        message: string,
        { statusCode, method, path, responseBody }: {
            statusCode: number;
            method: string;
            path: string;
            responseBody?: any;
        }
    ) {
        super(message);
        this.name = 'PalDefenderApiError';
        this.statusCode = statusCode;
        this.method = method;
        this.path = path;
        this.responseBody = responseBody;

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, PalDefenderApiError);
        }
    }
}