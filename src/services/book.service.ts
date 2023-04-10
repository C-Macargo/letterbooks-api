import { NewBook } from "protocols/book.protocol";
import errors from "../errors/index";
import { bookRepository } from "repositories/book.repository";

async function create({ name, author, rating}: NewBook) {
    const { rowCount } = await bookRepository.findByName(name);
    if (rowCount) throw errors.duplicatedNameError(name);
    await bookRepository.createBook({ name, author, rating })
}

export default{
    create
}