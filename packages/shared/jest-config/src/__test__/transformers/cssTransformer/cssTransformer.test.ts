import styles from './files/button.css';

describe('it should test css transformer', () => {
  test('it should import css file as an empty object', () => {
    expect(styles).toEqual({});
  });
});
