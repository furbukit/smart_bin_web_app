import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Co2Icon from "@mui/icons-material/Co2";

function getCO2(data) {
  var length = data.Count;
  var CO2_saved = 0;
  for (let i = 0; i < length; i++) {
    if (data.Items[i].BinNumber === 1) {
      CO2_saved += 1.08;
    } else if (data.Items[i].BinNumber === 2) {
      CO2_saved += 0.46;
    } else if (data.Items[i].BinNumber === 3) {
      CO2_saved += 0.31;
    }
  }
  return CO2_saved.toFixed(2);
}
export const CO2Saved = (props) => {
  const { data } = props;
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              MONTHLY CO2 SAVED
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {getCO2(data)}kg
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "warning.main",
                height: 56,
                width: 56,
              }}
            >
              <Co2Icon />
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
            16%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
