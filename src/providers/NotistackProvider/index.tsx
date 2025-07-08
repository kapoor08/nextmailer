"use client";

import React, { ReactNode } from "react";
import { SnackbarProvider } from "notistack";

interface IProps {
  children: ReactNode;
}

const NotiStackProvider: React.FC<IProps> = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default NotiStackProvider;
