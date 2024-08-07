"use client";
import {
  Box,
  BoxProps,
  Button,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { ReactNode, useMemo } from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Person } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import useMobile from "@/app/hooks/useMobile";

type NavItem = {
  label: string;
  path: string;
};

type Props = BoxProps & {
  nav: NavItem[];
};

export default function Header({ nav, ...box }: Props): ReactNode {
  const { palette, breakpoints } = useTheme();

  const mobile = useMobile();

  const navigation = useMemo(
    () =>
      nav.map((item) => (
        <Link key={item.label} href={item.path}>
          <Typography
            color={palette.common.white}
            sx={{ textShadow: `0 0 5px ${palette.text.primary}` }}
          >
            {item.label}
          </Typography>
        </Link>
      )),
    [nav, palette.common.white, palette.text.primary],
  );

  return (
    <Box
      component="header"
      {...box}
      sx={{
        position: "relative",
        zIndex: 2,
        py: 2,
        minHeight: 20,
        ...box.sx,
      }}
    >
      <Container
        maxWidth={breakpoints.keys["xl"]}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {mobile && (
          <Box
            sx={{
              width: {
                xs: "25%",
                md: "auto",
              },
            }}
          >
            <MenuIcon color="white" fontSize="large" />
          </Box>
        )}
        <Box
          sx={{
            filter: "brightness(0) invert(1)",
            textAlign: {
              xs: "center",
              md: "left",
            },
            flexGrow: {
              xs: 1,
              md: "auto",
            },
          }}
        >
          <Image src={Logo} width={160} alt="Open rent logo" />
        </Box>

        <Stack
          component="nav"
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: {
              xs: "flex-end",
              md: "auto",
            },
            width: {
              xs: "25%",
              md: "auto",
            },
          }}
        >
          {!mobile && navigation}
          <Button color="white" variant="outlined" startIcon={<Person />}>
            {`Sign in${!mobile ? "/ Register" : ""}`}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export { type Props };
