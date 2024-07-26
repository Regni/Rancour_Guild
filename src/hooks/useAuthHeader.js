import { useAuthContext } from "./useAuthContext";

export const useAuthHeader = () => {
  const { user } = useAuthContext();

  if (!user) {
    return;
  }

  return { Authorization: `Bearer ${user.token}` };
};
