import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ParkIcon from "@mui/icons-material/Park";

function treesCalc(data) {
  const length = data.Count;
  var trees = 0;
  for (let i = 0; i < length; i++) {
    if (data.Items[i].BinNumber === 1) {
      trees += 0.001101582;
    } else if (data.Items[i].BinNumber === 2) {
      trees += 0.0024;
    } else if (data.Items[i].BinNumber === 3) {
      trees += 0.0035;
    }
  }
  return trees.toFixed(3);
}

export const TreesPlanted = (props) => {
  const { data } = props;

  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TREES SAVED
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {treesCalc(data)}
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
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 2,
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            14%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
