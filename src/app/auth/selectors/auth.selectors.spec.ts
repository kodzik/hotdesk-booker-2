import { AuthState } from '../reducers';
import { selectAuthStatusState } from './auth.selectors';

describe('Selectors', () => {
  const initialState: AuthState = {
    signInPage: { error: null, pending: false },
    status: { user: { username: 'test' } },
  };

  it('should select auth status state', () => {
    const result = selectAuthStatusState.projector(initialState);
    expect(result.user).toEqual(Object({ username: 'test' }));
  });
});
