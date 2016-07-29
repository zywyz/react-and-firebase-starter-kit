import { expect } from 'chai';
import firebaseData from '../firebaseData';

describe('firebaseData reducer', () => {
  it('should return passed data when action.type is SET_DATA', () => {
    const initialState = { a: 'b' };
    const action = {
      data: {
        x: 0,
        y: 1,
      },
      type: 'SET_DATA',
    };
    const nextState = firebaseData(initialState, action);
    expect(nextState).to.eql(action.data);
  });
});