import clearPhone from '../clearphone';

test('clearPhone 1', () => {
  const result = '+79270000000';
  expect(clearPhone('8 (927) 000-00-00')).toBe(result);
});

test('clearPhone 2', () => {
  const result = '+5060000000000';
  expect(clearPhone('506 000 000 0000')).toBe(result);
});
