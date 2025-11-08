import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';

describe('AuthContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('provides null user after initialization without stored credentials', async () => {
    let contextValue;
    const Consumer = () => {
      contextValue = useAuth();
      return null;
    };

    render(
      <AuthProvider>
        <Consumer />
      </AuthProvider>
    );

    await waitFor(() => expect(contextValue?.loading).toBe(false));
    expect(contextValue.user).toBeNull();
  });

  test('restores stored user when token and user data exist', async () => {
    const storedUser = { id: 7, name: 'Stored User' };
    localStorage.setItem('token', 'stored-token');
    localStorage.setItem('user', JSON.stringify(storedUser));

    let contextValue;
    const Consumer = () => {
      contextValue = useAuth();
      return null;
    };

    render(
      <AuthProvider>
        <Consumer />
      </AuthProvider>
    );

    await waitFor(() => expect(contextValue?.loading).toBe(false));
    expect(contextValue.user).toEqual(storedUser);
  });

  test('login updates state and localStorage', async () => {
    let contextValue;
    const Consumer = () => {
      contextValue = useAuth();
      return null;
    };

    render(
      <AuthProvider>
        <Consumer />
      </AuthProvider>
    );

    await waitFor(() => expect(contextValue?.loading).toBe(false));

    const nextUser = { id: 3, name: 'Next User' };

    act(() => {
      contextValue.login(nextUser, 'next-token');
    });

    expect(localStorage.getItem('token')).toBe('next-token');
    expect(JSON.parse(localStorage.getItem('user'))).toEqual(nextUser);
    expect(contextValue.user).toEqual(nextUser);
  });

  test('useAuth throws when used outside provider', () => {
    const Consumer = () => {
      useAuth();
      return null;
    };

    expect(() => render(<Consumer />)).toThrow('useAuth must be used within an AuthProvider');
  });
});
