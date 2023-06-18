import {Router, Request, Response} from 'express';
import PageController from '../controllers/pageController';
import SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);


export default router;
