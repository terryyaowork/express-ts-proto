import { Router, Request, Response } from 'express';

import { UserRoutePaths } from '../../typings/routes/users';

const router = Router();

/* GET users listing. */
router.get(UserRoutePaths.INDEX, (req: Request, res: Response) => {
    res.send('respond with a resource');
});

export default router;