import { stringify } from 'querystring';
import { Store } from './store';

describe('Store', () => {
  it('should create an instance', () => {
    expect(new Store("mostafa",["cairo","giza"],"assets/profile.jpg")).toBeTruthy();
  });
});
