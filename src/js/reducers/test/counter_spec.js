import { expect } from 'chai';
import counter from '../counter';

describe('counter reducer', () => {
  it('should return passed state if action.type is incorrect', () => {
    const initialState = 5;
    const action = {};
    const nextState = counter(initialState, action);
    expect(nextState).to.equal(initialState);
  });

  it('should get default state 0 if state not passed', () => {
    const nextState = counter(undefined, {});
    expect(nextState).to.equal(0);
  });

  it('should return incremented value if action.type is INCREMENT', () => {
    const initialState = 5;
    const action = {
      type: 'INCREMENT',
    };
    const nextState = counter(initialState, action);
    expect(nextState).to.equal(initialState + 1);
  });
});