import express from 'express';
import CategoriesController from "../controllers/category.js"

const router = express.Router();
router.get('/all-category', CategoriesController.allCategories);

export default router;