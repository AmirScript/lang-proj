import {getWords, getExp} from '../controllers/enController';
import {Router} from 'express';

const router=Router();

router.get('/words', getWords);
router.get('/exp', getExp);

export default router;
