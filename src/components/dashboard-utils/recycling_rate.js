import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function getRate(data, length) {
  if (length == 0) {
    return 0;
  } else {
    var non_recycle = 0;
    for (let i = 0; i < length; i++) {
      if (data.Items[i].BinNumber === 0) {
        non_recycle++;
      }
    }
    var rate = ((length - non_recycle) * 100) / length;
    return rate.toFixed(1);
  }
}
export const RecyclingRate = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              RECYLING RATE
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {getRate(data, data.Count)}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 56,
                width: 56,
              }}
            >
              <AutorenewIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress
            value={getRate(data, data.Count)}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};
