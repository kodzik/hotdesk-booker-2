import { User } from '../models/user';
import { AuthState } from '../reducers';
import { selectAuthStatusState } from './auth.selectors';

describe('Selectors', () => {
  const newUser: User = { id: 1, username: 'test' };

  const initialState: AuthState = {
    signInPage: { error: null, pending: false },
    status: { user: newUser },
  };

  it('should select auth status state', () => {
    const result = selectAuthStatusState.projector(initialState);
    expect(result.user).toEqual(newUser);
  });
});
