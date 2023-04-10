import { NewBook, Book } from "protocols/book.protocol";
import errors from "../errors/index";
import { bookRepository } from "repositories/book.repository";

async function create({ name, author, rating}: NewBook) {
    const { rowCount } = await bookRepository.findByName(name);
    if (rowCount) throw errors.duplicatedNameError(name);
    await bookRepository.createBook({ name, author, rating })
}

async function read() {
    const { rows, rowCount } = await bookRepository.findBooks();
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function deleteBook(id: number){
    const { rowCount } = await bookRepository.findBookById(id);
    if (!rowCount) throw errors.notFoundError();
    await bookRepository.deleteBook(id);
}

export async function updateBook(id: number, { name, author, rating }: NewBook): Promise<Book> {
    const { rowCount } = await bookRepository.findBookById(id);
    if (!rowCount) throw errors.notFoundError();
    const { rowCount :nameRowCount } = await bookRepository.findByName(name);
    if (nameRowCount) throw errors.duplicatedNameError(name);
    const updatedBook = await bookRepository.updateBook({ id, name, author, rating });
    return updatedBook;
}



export default{
    create,
    read,
    deleteBook,
    updateBook
}