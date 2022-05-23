import pool from '../db/pg.js';

export const getAllArticles = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM articles;');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createArticle = async (req, res) => {
  try {
    const {
      body: { title, content, author }
    } = req;
    if (!title || !content || !author)
      return res.status(400).json({ error: 'Yep, you need to send title, content and author' });
    const {
      rows: [newArticle]
    } = await pool.query(
      'INSERT INTO articles(title, content, author) VALUES($1, $2, $3) RETURNING *;',
      [title, content, author]
    );
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleArticle = async (req, res) => {
  try {
    res.json(req.article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
