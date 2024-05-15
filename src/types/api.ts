export type BaseResponse<T> = SuccessResponse<T> | ErrorResponse;

export type SuccessResponse<T> = {
    isSuccess: true;
    data: T;
}

export type ErrorResponse = {
    isSuccess: false;
    message: string;
}