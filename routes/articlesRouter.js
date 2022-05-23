import { Router } from 'express';
import { createArticle, getAllArticles } from '../controllers/articles.js';

const articlesRouter = Router();

articlesRouter.route('/').get(getAllArticles).post(createArticle);

export default articlesRouter;
