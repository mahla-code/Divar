const { Router } = require("express");
const optionController = require("./option.controller");
const Authorization = require("../../common/guard/authorization.guard");

const router = Router();
router.post("/",Authorization, optionController.create)
router.get("/by-category/:categoryId", optionController.findByCategoryId)
router.get("/by-category-slug/:slug", optionController.findByCategorySlug)
router.get("/:id", optionController.findById)
router.delete("/:id",Authorization, optionController.removeById)
router.get("/", optionController.find)
router.put("/:id",Authorization, optionController.update)
module.exports = {
    OptionRoutes: router
}