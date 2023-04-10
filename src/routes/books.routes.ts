import { Router } from "express";
import bookController from "controllers/book.controller";
import { validateSchema } from "middlewares/validateSchema.middleware";
import { newBookSchema } from "schemas/book.schema";

const bookRoutes = Router();

bookRoutes.get('/',bookController.getBooks);
bookRoutes.post('/',validateSchema(newBookSchema),bookController.createBook );
bookRoutes.put('/:id',validateSchema(newBookSchema),bookController.updateBook);
bookRoutes.delete('/:id',bookController.deleteBook);


export default bookRoutes;