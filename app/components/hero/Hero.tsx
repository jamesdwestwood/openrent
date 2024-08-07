"use client";

import { forwardRef, ReactNode } from "react";
import {
  alpha,
  Box,
  BoxProps,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
  useTheme,
} from "@mui/material";
import Place from "@mui/icons-material/Place";
import { Stack } from "@mui/system";
import { Add, Search } from "@mui/icons-material";
import useMobile from "@/app/hooks/useMobile";
import { darken } from "@mui/material/styles";

type Props = BoxProps;

export default forwardRef(function Hero({ sx }: Props, ref): ReactNode {
  const { palette, breakpoints } = useTheme();
  const mobile = useMobile();
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        position: "relative",
        minHeight: 700,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          right: 0,
          height: 150,
          background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, ${darken(palette.bg.dark, 0.75)} 100%)`,
        },
        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: alpha(palette.bg.dark, 0.7),
        },
        ...sx,
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
          zIndex: -1,
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundSize: "cover",
        }}
      >
        <source src="hero-video.mp4" type="video/mp4" />
      </Box>
      <Container
        maxWidth={"md"}
        sx={{
          position: "relative",
        }}
      >
        <Card
          ref={ref}
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            padding: {
              xs: 3,
              md: 5,
            },
            boxShadow: 0,
            borderRadius: 4,
            backgroundColor: palette.common.white,
          }}
        >
          <Stack driection="row" spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography component="h1" variant="h4" align="center">
                <strong>Trusted by 6.8 million Tenants and Landlords</strong>
              </Typography>
              <Typography component="h2" variant="h6" align="center">
                <strong>
                  The destination for finding, advertising, and managing rental
                  property
                </strong>
              </Typography>
            </Stack>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <OutlinedInput
                type={"text"}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton edge="start" color="primary">
                      <Place />
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Search />}
                    sx={{
                      minWidth: 120,
                    }}
                  >
                    Search
                  </Button>
                }
                placeholder={
                  mobile ? "Enter a location" : "Enter a location to search"
                }
              />
            </FormControl>
            <Divider>OR</Divider>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Add />}
              size="large"
            >
              Add a listing for free
            </Button>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
});
