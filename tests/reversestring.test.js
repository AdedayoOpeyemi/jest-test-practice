import reverseString from '../modules/reversestring';

test('Should return yadretsey when passed in with yesterday', () => {
  expect(reverseString('yesterday')).toBe('yadretsey');
});