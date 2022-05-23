import pool from '../db/pg.js';

const checkArticle = async (req, res, next) => {
  try {
    const {
      params: { id }
    } = req;
    const { rowCount, rows } = await pool.query('SELECT * FROM articles WHERE id = $1;', [id]);
    if (!rowCount) return res.status(404).json({ error: `Article with id of ${id} was not found` });
    req.article = rows[0];
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default checkArticle;
