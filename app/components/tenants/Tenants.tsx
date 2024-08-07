"use client";
import { ReactNode } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Done, Search } from "@mui/icons-material";
import Users from "@/app/components/users/User";
import { Stack } from "@mui/system";
import useMobile from "@/app/hooks/useMobile";

const BENEFITS = [
  "No Admin Fees",
  "No Dead Listings",
  "Rent & Deposit Protected",
];

export default function Tenants(): ReactNode {
  const { palette, breakpoints } = useTheme();

  const benefits = BENEFITS.map((benefit, i) => (
    <ListItem key={i}>
      <ListItemIcon>
        <Done color="secondary" />
      </ListItemIcon>
      <ListItemText primary={<strong>{benefit}</strong>} />
    </ListItem>
  ));

  const mobile = useMobile();

  return (
    <Users
      title="Tenants"
      subtitle="On OpenRent there are never any admin fees. Ever."
      image="/TenantIntroVideoThumb.jpg"
      alt="2 Tenants searching online for property"
      direction="reverse"
      sx={{
        backgroundColor: palette.bg.light,
      }}
    >
      <Typography variant="subtitle1">
        The safer, faster and cheaper way to rent.
      </Typography>
      <List disablePadding>{benefits}</List>
      <Stack spacing={2} direction={mobile ? "column" : "row"}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Search />}
          sx={{
            minWidth: 200,
          }}
        >
          Begin search
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            minWidth: 200,
          }}
        >
          Learn more
        </Button>
      </Stack>
    </Users>
  );
}
