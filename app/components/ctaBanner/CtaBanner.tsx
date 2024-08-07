"use client";
import {
  Box,
  Button,
  Container,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { ReactNode, useCallback } from "react";
import { Stack } from "@mui/system";
import { Add, Search } from "@mui/icons-material";
import useMobile from "@/app/hooks/useMobile";

type Props = {
  show: boolean;
};

export default function CtaBanner({ show }: Props): ReactNode {
  const { palette, breakpoints } = useTheme();
  const mobile = useMobile();
  const scrollToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [],
  );

  return (
    <Slide direction="down" in={show}>
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 2,
          backgroundColor: palette.bg.dark,
        }}
      >
        <Container
          maxWidth={breakpoints.keys["xl"]}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction={mobile ? "column" : "row"}
            spacing={mobile ? 1 : 2}
            sx={{
              width: "100%",
              maxWidth: 600,
              py: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!mobile && (
              <Typography
                color={palette.common.white}
                sx={{ whiteSpace: "nowrap" }}
              >
                Get started now
              </Typography>
            )}
            <Stack
              spacing={2}
              direction="row"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Button variant="contained" color="secondary" startIcon={<Add />}>
                Add a listing
              </Button>
              <Typography color={palette.common.white}>or</Typography>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Search />}
                onClick={scrollToTop}
              >
                Begin search
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Slide>
  );
}

export { type Props };
