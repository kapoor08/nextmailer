"use client";

import { enqueueSnackbar, OptionsObject } from "notistack";

export const notifySuccess = (message: string, options?: OptionsObject) => {
  enqueueSnackbar(message, {
    variant: "success",
    ...options,
  });
};

export const notifyError = (message: string, options?: OptionsObject) => {
  enqueueSnackbar(message, {
    variant: "error",
    ...options,
  });
};

export const notifyWarning = (message: string, options?: OptionsObject) => {
  enqueueSnackbar(message, {
    variant: "warning",
    ...options,
  });
};

export const notifyInfo = (message: string, options?: OptionsObject) => {
  enqueueSnackbar(message, {
    variant: "info",
    ...options,
  });
};
