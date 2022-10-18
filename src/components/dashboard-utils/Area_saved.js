import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LandscapeIcon from "@mui/icons-material/Landscape";

function areaCalc(data) {
  var area_saved = 0;
  var length = data.Count;
  for (let i = 0; i < length; i++) {
    if (data.Items[i].BinNumber === 1) {
      area_saved += 0.32;
    } else if (data.Items[i].BinNumber === 2) {
      area_saved += 0.25;
    } else if (data.Items[i].BinNumber === 3) {
      area_saved += 0.16;
    }
  }
  return area_saved.toFixed(2);
}
export const AreaSaved = (props) => {
  const { data } = props;
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              LANDFILL SAVED
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {areaCalc(data)}kg
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "error.main",
                height: 56,
                width: 56,
              }}
            >
              <LandscapeIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon color="error" />
          <Typography
            color="error"
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            12%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
