import image from './files/image.png';

describe('it should test file transformer', () => {
  test('it should import png file', () => {
    expect(image).toBe('image.png');
  });
});
