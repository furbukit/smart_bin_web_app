import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { AreaSaved } from "./components/dashboard-utils/Area_saved";
import { WasteTable } from "./components/dashboard-utils/table";
import { ItemsList } from "./components/dashboard-utils/items_list";
import { WasteBar } from "./components/dashboard-utils/bar";
import { TreesPlanted } from "./components/dashboard-utils/trees_planted";
import { CO2Saved } from "./components/dashboard-utils/CO2_saved";
import { PieChart } from "./components/dashboard-utils/pie";
import { RecyclingRate } from "./components/dashboard-utils/recycling_rate";
import { registerChartJs } from "./components/dashboard-utils/register-chart-js";
import { DashboardNavbar } from "./components/dashboard-navbar";

import * as AWS from "aws-sdk";

AWS.config = new AWS.Config();
AWS.config.update({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});
//console.log(AWS.config.credentials);

registerChartJs();
WasteTable();
function App() {
  return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <DashboardNavbar></DashboardNavbar>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <RecyclingRate />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <CO2Saved />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <AreaSaved />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TreesPlanted sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <WasteBar />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <PieChart sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <ItemsList sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
  );
}
export default App;
