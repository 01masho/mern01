import express from "express"
import { addIncome, deleteIncome, downloadIncomeExcel, getAllIncome, getIncome } from "../controllers/incomeContoller.js"
import { protect } from "../middlewares/authMiddleware.js";
const router =express.Router()

router.post('/add-income',protect, addIncome)
router.get('/',protect, getAllIncome)
router.delete('/:id',protect, deleteIncome)
router.get('/:id',protect, getIncome)
router.get('/downloadExcel',protect, downloadIncomeExcel)

export default router;