import { Router } from 'express';
import { createArticle, getAllArticles, getSingleArticle } from '../controllers/articles.js';
import checkArticle from '../middlewares/checkArticle.js';

const articlesRouter = Router();

articlesRouter.route('/').get(getAllArticles).post(createArticle);
articlesRouter.route('/:id').get(checkArticle, getSingleArticle);

export default articlesRouter;
