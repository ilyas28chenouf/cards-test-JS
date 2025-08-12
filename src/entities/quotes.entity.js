/**
 * @typedef {Object} QuoteItem
 * @property {number} id
 * @property {string} quote
 * @property {string} author
 */

export const QuotesEntity = {
  /**
   * Normalize API response to { items, total }
   * @param {{ quotes?: Array<{id:number, quote:string, author:string}>, total?: number }} apiResponse
   */
  normalize(apiResponse) {
    const items = (apiResponse?.quotes ?? []).map(q => ({
      id: q.id,
      quote: q.quote,
      author: q.author,
    }));
    return { items, total: apiResponse?.total ?? items.length };
  }
};
