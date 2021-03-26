const ImprovedArray = require('./improvedArray');

// (1)
test('Testando o item (1) do enunciado: criação de vetor com elementos repetidos.', () => {
    expect(ImprovedArray.fillWith(3, 'a')).toEqual(['a', 'a', 'a']);
});

// (2)
test('Testando o item (2) do enunciado: inversão dos elementos do vetor.', () => {
    expect(ImprovedArray.invert([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

// (3)
test('Testando o item (3) do enunciado: remoção de elementos inúteis do vetor.', () => {
    expect(ImprovedArray.clear([1, 2, '', undefined])).toEqual([1, 2]);
});

// (4)
test('Testando o item (4) do enunciado: convertendo um vetor de pares em objeto.', () => {
    expect(ImprovedArray.convertToObject([["c",2], ["d",4]])).toEqual({c: 2, d: 4});
});

// (5)
test('Testando o item (5) do enunciado: extraindo fornecidos como parâmetro do vetor.', () => {
    expect(ImprovedArray.extract([5,4,3,2,5], 5, 3)).toEqual([4, 2]);
});

// (6)
test('Testando o item (6) do enunciado: removendo elementos repetidos do vetor.', () => {
    expect(ImprovedArray.removeRepetitions([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])).toEqual([1, 2, 3, 4, 5, 7]);
});

// (7)
test('Testando o item (7) do enunciado: comparando vetores.', () => {
    expect(ImprovedArray.compare([1,2,3,4], [1,2,3,4])).toEqual(true);
});

// (8)
test('Testando o item (8) do enunciado: segmentando vetor em partes iguais.', () => {
    expect(ImprovedArray.splitOn([1,2,3,4,5], 2)).toEqual([[1,2], [3,4], [5]]);
});

// (9)
test('Testando o item (9) do enunciado: desfazendo subvetores do vetor.', () => {
    expect(ImprovedArray.removeSubArrays([1, 2, [3], [4,5]])).toEqual([1, 2, 3, 4, 5]);
});

// (10)
test('Testando o item (10) do enunciado: determinando interseção entre vetores.', () => {
    expect(ImprovedArray.intersection([6,8], [8,9])).toEqual([8]);
});