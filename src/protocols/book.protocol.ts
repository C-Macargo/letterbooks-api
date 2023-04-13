export type Book = {
    id: number,
    name: string | null;
    author: string,
    rating: number,
}

export type NewBook = {
    name: string,
    author: string,
    rating: number,
}

export type CheckId = {
    id: number,
}
