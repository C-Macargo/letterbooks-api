import { NewBook, Book } from "protocols/book.protocol";
import errors from "../errors/index";
import { bookRepository } from "repositories/book.repository";

async function create({ name, author, rating}: NewBook) {
    const book = await bookRepository.findByName(name);
    if (book) throw errors.duplicatedNameError(name);
    await bookRepository.createBook({ name, author, rating })
}

async function read() {
    const books = await bookRepository.findBooks();
    if (!books) throw errors.notFoundError();
    return books;
}

async function deleteBook(id: number){
    const bookById = await bookRepository.findBookById(id);
    if (!bookById) throw errors.notFoundError();
    await bookRepository.deleteBook(id);
}

export async function updateBook(id: number, { name, author, rating }: NewBook): Promise<Book> {
    const bookById = await bookRepository.findBookById(id);
    if (!bookById) throw errors.notFoundError();
    const bookByName = await bookRepository.findByName(name);
    if (bookByName) throw errors.duplicatedNameError(name);
    const updatedBook = await bookRepository.updateBook({ id, name, author, rating });
    return updatedBook;
}



export default{
    create,
    read,
    deleteBook,
    updateBook
}