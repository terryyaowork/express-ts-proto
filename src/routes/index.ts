import { Router, Request, Response } from 'express';
import usersRouter from './users';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Home Page')
});
router.use('/users', usersRouter);

export default router;