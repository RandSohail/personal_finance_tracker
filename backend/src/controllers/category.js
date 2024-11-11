import { Categories } from "../database/index.js"
export default class CategoriesController {

  static async getAllCategories(_request, response, next) {
    try {
      // TODO: handel Database Error
      const data = await Categories.findAll({
        attributes: ['id', 'name']
      });
      response.json({ data })
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}