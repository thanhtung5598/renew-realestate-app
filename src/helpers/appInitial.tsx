import { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { getProfileMe } from "@/store/auth/thunks";

const AppInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfileMe());
  }, [dispatch]);

  return <div></div>;
};

export default AppInit;
