const API_URL = import.meta.env.VITE_API_URL;

export type User = { name?: string; email?: string };

export class ApiError extends Error {
  status: number;
  constructor(status: number) {
    super(`Request failed: ${status}`);
    this.status = status;
  }
}

export async function login(email: string, password: string): Promise<{ token: string }> {
  const response = await fetch(`${API_URL}/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new ApiError(response.status);
  return response.json(); // (guess) { token: "..." }
}

export async function getMe(token: string): Promise<User> {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` }, // (guess) Bearer
  });
  if (!response.ok) throw new ApiError(response.status);
  return response.json();
}

/* Token storage */
export const saveToken = (token: string) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const clearToken = () => localStorage.removeItem('token');

/* Friendly messages from the handout's error table */
export function messageFor(err: unknown): string {
  if (err instanceof ApiError) {
    if (err.status === 400 || err.status === 404) return 'Please check your email and password.';
    if (err.status === 401 || err.status === 403) return 'Wrong email or password.';
    if (err.status >= 500) return 'Something went wrong on our side. Please try again later.';
  }
  return 'Cannot reach the server. Please check your connection and try again.';
}