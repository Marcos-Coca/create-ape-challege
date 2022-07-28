import { useContext, useState } from "react";
import SessionContext from "../context";
import service from "../services/session";

export default function useSession() {
  const { user, setUser } = useContext(SessionContext);
  const [state, setState] = useState({ loading: false, error: null });

  const login = (email: string, password: string) => {
    setState({ error: null, loading: true });

    return service
      .login(email, password)
      .then((user) => {
        setUser(user);
        setState({ error: null, loading: false });
      })
      .catch((error) => {
        setUser(null);
        setState({ error, loading: false });
        throw new Error(error.message);
      });
  };

  const register = (email: string, password: string) => {
    setState({ error: null, loading: true });
    return service
      .register(email, password)
      .then((user) => {
        setUser(user);
        setState({ error: null, loading: false });
      })
      .catch((error) => {
        setUser(null);
        setState({ error, loading: false });
        return error;
      });
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    register,
    error: state.error,
    loading: state.loading,
  };
}
