"use client";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import {
  Box,
  BoxProps,
  Chip,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import BBC from "../../../public/bbc.png";
import Mirror from "../../../public/mirror.png";
import Telegraph from "../../../public/telegraph.png";
import Sun from "../../../public/the-sun.png";
import { Stack } from "@mui/system";

type Brand = {
  name: string;
  image: StaticImageData;
};

const BRANDS: Brand[] = [
  { name: "BBC", image: BBC },
  { name: "Mirror", image: Mirror },
  { name: "Telegraph", image: Telegraph },
  { name: "The Sun", image: Sun },
];

type Props = BoxProps;

export default function SocialProof(props: Props): ReactNode {
  const { palette } = useTheme();

  const brands = BRANDS.map((brand, i) => (
    <Box sx={{ maxWidth: "20vw", maxHeight: 24 }} key={i}>
      <Image
        alt={brand.name}
        src={brand.image}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: 24,
          verticalAlign: "middle",
        }}
      />
    </Box>
  ));

  return (
    <Box
      component="section"
      {...props}
      sx={{
        backgroundColor: palette.bg.light,
        pt: 0,
        pb: 6,
        ...props.sx,
      }}
    >
      <Container
        maxWidth={"md"}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Chip
          label={
            <Typography variant="subtitle1" color={palette.common.white}>
              As seen on
            </Typography>
          }
          sx={{ mt: -2, mb: 3, minWidth: 140 }}
          color="primary"
        />
        <Stack
          direction="row"
          spacing={4}
          sx={{
            pt: 2,
            width: "100%",
            maxWidth: 600,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {brands}
        </Stack>
      </Container>
    </Box>
  );
}
