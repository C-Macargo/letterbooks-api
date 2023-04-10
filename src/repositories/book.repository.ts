import { db } from "../config/database.connection.js";
import { NewBook, Book,CheckId } from "protocols/book.protocol.js";
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

    async function findBooks() : Promise<QueryResult<Book>>{
        return await db.query(`SELECT name,author,rating FROM books;`)
    }

    async function findBookById(id: number) : Promise<QueryResult<CheckId>>{
        return await db.query(
            `SELECT * FROM books WHERE id=$1`,
            [id]
        )
    }

    async function deleteBook(id: number){
        return await db.query(`DELETE FROM books WHERE id=$1`,
        [id]);
    }


export const bookRepository = {
    findByName,
    createBook,
    findBooks,
    findBookById,
    deleteBook
}