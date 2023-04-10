import { Router } from 'express';
import userRoutes from './books.routes';

const router = Router();

router.use('/books', userRoutes)


export default router;