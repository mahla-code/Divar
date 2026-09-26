const { Router } = require("express");
const categoryController = require("./category.controller");
const Authorization = require("../../common/guard/authorization.guard");
const router = Router();
router.post('/',Authorization,categoryController.create)
router.get('/',categoryController.find)
router.delete("/:id",Authorization, categoryController.remove)

module.exports = {
    CategoryRouter: router
}