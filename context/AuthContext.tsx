import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  OAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { auth } from "../lib/firebase";

interface StoredUserInfo {
  uid: string;
  email: string;
  displayName: string;
  providerId: string;
  photoUrl: string;
}

const AuthContext = createContext(null);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState<StoredUserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleUser = (rawUser: User | null) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      setLoading(false);
      setUser(user);
      return user;
    } else {
      setLoading(false);
      setUser(null);
      return false;
    }
  };

  const signInWithGithub = () => {
    setLoading(true);
    const provider = new OAuthProvider("github.com");
    return signInWithPopup(auth, provider).then((response) => {
      handleUser(response.user);
      // return response.user;
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      handleUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
}

const formatUser = (user: User) => {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    providerId: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
