import { AuthProvider, HttpError } from "react-admin";
import data from "./users.json";

type AccessControlStrategies  = {
  [key: string]: ({ resource, action }: {
    resource: string;
    action: string;
  }) => boolean;
}
const accessControlStrategies: AccessControlStrategies = {
  admin: () => {
    return true;
  },
  user: ({ resource, action }) => {
    // can list and show programmes
    if (resource === 'programmes' && ['list', 'show'].includes(action)){
      return true;
    }
    // can list and show rewards
    if (resource === 'rewards' && ['list', 'show'].includes(action)){
      return true;
    }
    return false;
  },
}

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const user = data.users.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const { password, ...userToPersist } = user;
      localStorage.setItem("user", JSON.stringify(userToPersist));
      return Promise.resolve();
    }

    return Promise.reject(
      new HttpError("Unauthorized", 401, {
        message: "Invalid username or password",
      }),
    );
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
  canAccess: async ({resource, action}) => {
    const user = localStorage.getItem("user");
    if (!user) {
      return false;
    }
    const { role } = JSON.parse(user);
    return accessControlStrategies[role]({ resource, action });
  },
};

export default authProvider;
