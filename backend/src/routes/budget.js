import express from 'express';
import BudgetController from '../controllers/budget.js'
import { validator, budgetSchema } from '../helpers/index.js';

const router = express.Router();

router.post('/add-budget', validator.body(budgetSchema), BudgetController.createBudget);
router.get('/getCategoryBudgetsForCurrentWeek', BudgetController.getCategoryBudgetsForCurrentWeek);

export default router;