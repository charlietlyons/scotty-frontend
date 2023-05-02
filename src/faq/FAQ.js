import React from "react";
import PageBody from "../common/PageBody";
import { Typography, Stack } from "@mui/material";

const FAQ = () => {
  return (
    <PageBody>
      <Typography variant="h1">FAQ</Typography>
      <Stack spacing={2}>
        <Typography variant="h2">What is this?</Typography>
        <Typography variant="body1">A website for selling golf crap</Typography>
        <Typography variant="h2">Who made this?</Typography>
        <Typography variant="body1">ME</Typography>
      </Stack>
    </PageBody>
  );
};

export default FAQ;
