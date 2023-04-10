import { NewBook } from "protocols/book.protocol";
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



export default{
    create,
    read,
    deleteBook
}