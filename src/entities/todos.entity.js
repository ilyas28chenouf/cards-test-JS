/**
 * @typedef {Object} TodoItem
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 * @property {number} userId
 */

export const TodosEntity = {
  /**
   * Normalize API response to { items, total }
   * @param {{ todos?: Array<{id:number, todo:string, completed:boolean, userId:number}>, total?: number }} apiResponse
   */
  normalize(apiResponse) {
    const items = (apiResponse?.todos ?? []).map(t => ({
      id: t.id,
      title: t.todo,
      completed: Boolean(t.completed),
      userId: t.userId,
    }));
    return { items, total: apiResponse?.total ?? items.length };
  }
};
