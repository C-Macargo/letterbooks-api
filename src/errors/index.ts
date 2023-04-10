function conflictError(message : string) {
    return {
        name: "ConflictError",
        message,
    };
}

function duplicatedNameError(name : string) {
    return {
        name: "DuplicatedNameError",
        message: "There is already a book with this name",
        bookName: name
    };
}

function duplicatedError() {
    return {
        name: "DuplicatedError",
        message: "There is already an user with given email or crm",
    };
}

function unauthorizedError() {
    return {
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
    };
}

function notFoundError() {
    return {
        name: "NotFoundError",
        message: "No result for this search!",
    };
}

function invalidCredentialsError() {
    return {
        name: "InvalidCredentialsError",
        message: "Email or password are incorrect",
    };
}

export default {
    conflictError,
    duplicatedNameError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
    duplicatedError,
};