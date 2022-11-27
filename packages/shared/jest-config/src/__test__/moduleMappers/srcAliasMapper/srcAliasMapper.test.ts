import file from '@src/__test__/moduleMappers/srcAliasMapper/files/document.md';
import styles from '@src/__test__/moduleMappers/srcAliasMapper/files/button.css';

describe('it should test @src alias module mapper', () => {
  test('it should import md file by @src alias', () => {
    expect(file).toBe('document.md');
  });

  test('it should import css file by @src alias', () => {
    expect(styles).toEqual({});
  });
});
