import {getCharacters, getCharacter} from '../controllers/chController';
import {Router} from 'express';

const router=Router();

router.get('/characters', getCharacters);
router.get('/character', getCharacter);

export default router;
