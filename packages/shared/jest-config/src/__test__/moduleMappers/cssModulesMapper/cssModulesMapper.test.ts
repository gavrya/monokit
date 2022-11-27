import styles from './files/button.module.css';

describe('it should test css modules mapper', () => {
  test('it should import css module file as an empty object', () => {
    expect(styles).toEqual({});
  });

  test('it should import css module file and proxy object property values', () => {
    expect(styles.radioButton).toBe('radioButton');
    expect(styles.submitForm).toBe('submitForm');
  });
});
