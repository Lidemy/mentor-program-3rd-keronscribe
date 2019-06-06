const stars = require('./hw1');
// console.log (stars(3));

describe('測試印星星', () => {
  test('應該要有一顆星', () => {
    expect(stars(1)).toEqual(['*']);
  });
  test('應該要有一到三顆星', () => {
    expect(stars(3)).toEqual(['*', '**', '***']);
  });
  test('應該要有一到六顆星', () => {
    expect(stars(6)).toEqual(['*', '**', '***', '****', '*****', '******']);
  });
});
