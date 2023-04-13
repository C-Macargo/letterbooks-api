import prisma from "config/database.connection";
import { NewBook, Book, CheckId } from "protocols/book.protocol.js";

async function findByName(name: string): Promise<Book | null> {
	const book = await prisma.books.findUnique({
		where: {
			name,
		},
	});
	return book;
}

async function createBook({ name, author, rating }: NewBook): Promise<Book> {
	const book = await prisma.books.create({
		data: {
			name,
			author,
			rating,
		},
	});
	return book;
}

async function findBooks(): Promise<Book[]> {
	const books = await prisma.books.findMany();
	return books;
}

async function findBookById(id: number): Promise<CheckId | null> {
	const book = await prisma.books.findUnique({
		where: {
			id,
		},
	});
	return book;
}

async function deleteBook(id: number) {
    const book = await prisma.books.delete({
		where: {
			id,
		},
	});
	return book;
}

async function updateBook({ id, name, author, rating }: Book): Promise<Book> {
        const updatedBook = await prisma.books.update({
            where: {
            id,
        },
            data: {
            name,
            author,
            rating,
        },
        })
        return updatedBook
    }


export const bookRepository = {
	findByName,
	createBook,
	findBooks,
	findBookById,
	deleteBook,
	updateBook,
};
