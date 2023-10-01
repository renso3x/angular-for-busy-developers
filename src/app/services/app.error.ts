import { ErrorHandler } from "@angular/core"

export class AppError {
    constructor(public originalErr?: any){}
}

export class NotFoundError extends AppError {
}

export class BadInputError extends AppError {

}

// Global Error Handler
export class AppErrorHandler implements ErrorHandler {
    handleError(error: any) {
        alert('Global error')
        console.log(error);
    }
}