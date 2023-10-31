import React from "react";
import { useAppSelector } from "@/store";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth, loading } = useAppSelector((state) => state.auth);

  if (!loading && !isAuth && typeof window !== "undefined") {
    window.location.href = "account/login";
    return null;
  }

  return children;
};

export default PrivateRoute;
