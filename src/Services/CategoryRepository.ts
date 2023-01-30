import {
    createCategory,
    findCategoryById,
    findCategoryByName,
    findManyCategories,
} from '../Repositories';
import { ConflictError, NotFoundError } from '../Errors';

async function create(name: string) {
    console.log('ss');
    const category = await findCategoryByName(name);
    if (category) return ConflictError();
    const newCategory = await createCategory(name);
    return newCategory;
}

async function findById(id: number) {
    const category = await findCategoryById(id);
    if (!category) throw NotFoundError();

    return category;
}

async function findCategories() {
    const categories = await findManyCategories();
    return categories;
}

export { create, findById, findCategories };
