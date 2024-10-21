import { Router, Request, Response } from 'express';
import usersRouter from './users';

import { IndexRoutePaths } from '../../typings/routes/index';

const router = Router();

router.get(IndexRoutePaths.HOME, (req: Request, res: Response) => {
    res.send('Welcome to the Home Page')
});
router.use(IndexRoutePaths.USERS, usersRouter);

export default router;