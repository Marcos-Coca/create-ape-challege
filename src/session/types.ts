export interface User {
  userName: string;
  email: string;
}

export interface Context {
  user: User | null;
  setUser: (user: User | null) => void;
}
