"use client";
import { ReactNode } from "react";
import {
  Box,
  BoxProps,
  Chip,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  children: ReactNode;
  direction?: "reverse";
  sx?: BoxProps["sx"];
};

export default function Users(props: Props): ReactNode {
  const { title, subtitle, image, alt, children, direction, sx } = props;
  const { palette, breakpoints } = useTheme();

  return (
    <Box
      component="section"
      sx={{
        background: palette.common.white,
        py: 8,
        px: 2,
        ...sx,
      }}
    >
      <Container maxWidth={breakpoints.keys["xl"]}>
        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            gridGap: {
              xs: 20,
              md: 50,
            },
            flexDirection: {
              xs: "column",
              md: direction === "reverse" ? "row-reverse" : "row",
            },
          }}
        >
          <Box>
            <Chip
              label={
                <Typography variant="subtitle1" color={palette.common.white}>
                  {title}
                </Typography>
              }
              sx={{ mt: -2, mb: 3, minWidth: 140 }}
              color="dark"
            />
            <Typography component="h3" variant="h4" sx={{ mb: 2 }}>
              <strong>{subtitle}</strong>
            </Typography>
            <Stack spacing={4}>{children}</Stack>
          </Box>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
              width: "100%",
              maxWidth: 500,
              position: "relative",
            }}
          >
            <img src={image} width="100%" height="auto" alt={alt} />
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                marginLeft: "-60px",
                top: "50%",
                marginTop: "-60px",
                fontSize: 120,
              }}
            >
              <PlayArrowIcon fontSize="inherit" color="white" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
