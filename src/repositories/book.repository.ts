import { db } from "../config/database.connection.js";
import { NewBook, Book } from "protocols/book.protocol.js";
import { QueryResult } from "pg";

async function findByName(name : string) : Promise<QueryResult<Book>>{
    return await db.query(
        `SELECT * FROM books WHERE name=$1`,
        [name]
    )
}

async function createBook({ name, author, rating } : NewBook) : Promise<QueryResult<Book>> {
    const result = await db.query(
    `INSERT INTO books (name, author, rating) VALUES ($1, $2, $3);`,
    [name, author, rating]
    );
    return result;
    }

export const bookRepository = {
    findByName,
    createBook
}