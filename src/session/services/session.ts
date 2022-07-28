import { User } from "../types";

const user: User = {
  userName: "Test",
  email: "test@gmail.com",
};

export default {
  register: (email: string, password: string): Promise<User> => {
    return Promise.resolve(user);
  },
  login: (email: string, password: string): Promise<User> => {
    if (email === user.email && password === "12345678") {
      return Promise.resolve(user);
    }
    return Promise.reject(new Error("Invalid Password"));
  },
  checkEmailsIsRegistered: (email: string = ""): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(email === user.email);
      }, 1000);
    });
  },
};
