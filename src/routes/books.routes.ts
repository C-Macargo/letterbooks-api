import { Router } from "express";
import bookController from "controllers/book.controller";

const bookRoutes = Router();

bookRoutes.get('/',bookController.getBooks);
bookRoutes.post('/',bookController.createBook );
bookRoutes.put('/:id',);
bookRoutes.delete('/:id',);




export default bookRoutes;