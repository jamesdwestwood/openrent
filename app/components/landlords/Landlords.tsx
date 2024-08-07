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
import { Add, Done } from "@mui/icons-material";
import Users from "@/app/components/users/User";
import { Stack } from "@mui/system";
import useMobile from "@/app/hooks/useMobile";

const BENEFITS = [
  "100% Free Advertising Option",
  "No Hidden Fees",
  "No Renewal Fees",
  "No Credit Card to Get Started",
];

export default function Landlords(): ReactNode {
  const { palette } = useTheme();

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
      title="Landlords"
      subtitle="We find you tenants and help with referencing, contracts and more if you need it."
      image="/LandlordIntroVideoThumb.jpg"
      alt="Landlord sitting on couch"
    >
      <Typography variant="subtitle1">
        OpenRent gives you the best possible chance of finding your ideal
        tenant, and you stay in control.
      </Typography>
      <List disablePadding>{benefits}</List>
      <Stack spacing={2} direction={mobile ? "column" : "row"}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<Add />}
          sx={{
            minWidth: 200,
          }}
        >
          Add a listing
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
