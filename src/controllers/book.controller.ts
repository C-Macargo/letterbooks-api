import { Request, Response, NextFunction } from "express";
import { NewBook } from "protocols/book.protocol";
import bookService from "services/book.service";

async function createBook(req: Request, res: Response, next: NextFunction) {
    const { name, author, rating } = req.body as NewBook;

    try {
        await bookService.create({ name, author, rating });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
}

async function getBooks(req: Request, res: Response, next: NextFunction) {
    try {
        const books = await bookService.read();
        return res.send({ books })
    } catch (err) {
        next(err);
    }
}

async function deleteBook(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const idNumber = parseFloat(id); 
    try {
        await bookService.deleteBook(idNumber)
        return res.sendStatus(204)
    } catch (err) {
        next(err);
    }
}

export async function updateBook(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { id } = req.params;
	const idNumber = parseInt(id, 10);
	const { name, author, rating } = req.body as NewBook;

	try {
		const updatedBook = await bookService.updateBook(idNumber, {
			name,
			author,
			rating,
		});
		return res.json(updatedBook);
	} catch (err) {
		next(err);
	}
}

export default {
    createBook,
    getBooks,
    deleteBook,
    updateBook
}

