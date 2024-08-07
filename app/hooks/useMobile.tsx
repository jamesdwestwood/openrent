import { useMemo } from "react";
import { useWindowSize } from "usehooks-ts";
import { useTheme } from "@mui/material";

const useMobile = (): boolean => {
  const { breakpoints } = useTheme();

  const size = useWindowSize();
  return useMemo(
    () => size.width < breakpoints.values.md,
    [breakpoints.values.md, size.width],
  );
};

export default useMobile;
