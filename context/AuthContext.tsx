import { createContext, ReactNode, useEffect, useState } from "react";
import {
  OAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { auth } from "../lib/firebase";

// export interface AuthState {
//   currentUser: User | null;
//   userData: StoredUserInfo | null;
// }

interface StoredUserInfo {
  userProviderId: string;
  userId: string;
}

// export const AuthContext = createContext<AuthState>();

const AuthContext = createContext(null);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProviderAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGithub = () => {
    const provider = new OAuthProvider("github.com");
    signInWithPopup(auth, provider).then((response) => {
      setUser(response.user);
      return response.user;
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
}
