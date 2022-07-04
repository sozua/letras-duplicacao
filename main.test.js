const { removeDuplication } = require("./main");

describe('Duplicated words', () => {
    it('should ends with dot', () => {
        expect(removeDuplication('')[0]).toBe('.')
    });

    it('should remove duplication from "banana"', () => {
        expect(removeDuplication('banana')).toBe('bana.')
    });

    it('should remove duplication from long phrases', () => {
        expect(removeDuplication('oo ratoato roeuoeu aa roupaoupa dodo reiei dee romaoma')).toBe('o rato roeu a roupa do rei de roma.')
    });

    it('should NOT remove duplication if one word doesnt have duplication', () => {
        expect(removeDuplication('a bananeira tem banana')).toBe('a bananeira tem banana.')
        expect(removeDuplication('oo ratoato roeu aa roupa')).toBe('oo ratoato roeu aa roupa.')
    });
});