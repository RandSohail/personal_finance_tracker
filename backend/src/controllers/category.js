import { Categories } from "../database/index.js"
export default class CategoriesController {

  static async allCategories(_request, response, next) {
    try {
      const data = await Categories.findAll({
        attributes: ['id', 'name']
      });
      response.json({ data })
    } catch (error) {
      next(error);
    }
  }
}