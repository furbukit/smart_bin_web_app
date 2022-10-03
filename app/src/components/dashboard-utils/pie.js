import { Doughnut } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import GrassIcon from "@mui/icons-material/Grass";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export const PieChart = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 23, 14],
        backgroundColor: ["#E53935", "#FB8C00", "#3F51B5", "#64e65b"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["General Waste", "Recycling", "Containers4Change", "Compost"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "General Waste",
      value: 63,
      icon: DeleteIcon,
      color: "#E53935",
    },
    {
      title: "Recycling",
      value: 15,
      icon: AutorenewIcon,
      color: "#FB8C00",
    },
    {
      title: "Containers4Change",
      value: 23,
      icon: LocalDrinkIcon,
      color: "#3F51B5",
    },
    {
      title: "Compost",
      value: 14,
      icon: GrassIcon,
      color: "#64e65b",
    },
  ];
  return (
    <Card {...props}>
      <CardHeader title="Waste Composition" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
