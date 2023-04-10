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
        );
    }

async function deleteBook(id: number){
        return await db.query(`DELETE FROM books WHERE id=$1`,
        [id]);
    }

    async function updateBook({ id, name, author, rating }: Book): Promise<Book> {
        const { rows } = await db.query(
          'UPDATE books SET name = $2, author = $3, rating = $4 WHERE id = $1 RETURNING *',
            [id, name, author, rating]
        );
        return rows[0];
    }




export const bookRepository = {
    findByName,
    createBook,
    findBooks,
    findBookById,
    deleteBook,
    updateBook
}