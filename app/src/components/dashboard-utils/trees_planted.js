import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import ParkIcon from "@mui/icons-material/Park";

export const TreesPlanted = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            TREES PLANTED
          </Typography>
          <Typography color="textPrimary" variant="h4">
            0.23
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#64e65b",
              height: 56,
              width: 56,
            }}
          >
            <ParkIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
