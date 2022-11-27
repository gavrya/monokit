import filePath, { ReactComponent as SvgIcon } from './files/icon.svg';

describe('it should test svg transformer', () => {
  test('it should import svg file as filepath', () => {
    expect(filePath).toBe('icon.svg');
  });

  test('it should import svg file as ReactComponent', () => {
    expect(SvgIcon).toBeTruthy();
  });
});
