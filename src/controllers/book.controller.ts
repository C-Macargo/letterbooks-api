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

export default {
    createBook
}

