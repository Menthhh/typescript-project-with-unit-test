import { merge } from '../src/sorting';

describe('merge', () => {
    it('Merge and sort 1st List', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('Merge and sort 2nd List', () => {
        const result = merge([], [2, 4, 6]);
        expect(result).toEqual([2, 4, 6]);
    });

    it('Merge and sort 3rd List', () => {
        const result = merge([1, 3, 5], [2, 4, 6, 8, 10]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
    });
});
