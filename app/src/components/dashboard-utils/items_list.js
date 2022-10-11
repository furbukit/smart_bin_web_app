import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import tomato from "../tomato.png";
import cookies from "../cookies.png";
import cherries from "../cherries.png";
import soap from "../soap.png";
import coke from "../coke.png";

const products = [
  {
    id: uuid(),
    name: "Cherries (Fresh)",
    imageUrl: cherries,
    updatedAt: "Instead of 500g Frozen Cherries",
  },
  {
    id: uuid(),
    name: "HempCo Organic Soap",
    imageUrl: soap,
    updatedAt: "Instead of Palmolive Soap 6pk",
  },
  {
    id: uuid(),
    name: "1 x Tomato",
    imageUrl: tomato,
    updatedAt: "Instead of 3 x Tomato",
  },
  {
    id: uuid(),
    name: "EmporityM 4pk Cookies",
    imageUrl: cookies,
    updatedAt: "Oreos Original 24pk",
  },
  {
    id: uuid(),
    name: "Coca Cola 375mL (Can)",
    imageUrl: coke,
    updatedAt: "Instead of Coca Cola 360L (Bottle)",
  },
];

export const ItemsList = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Reccomendations"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem divider={i < products.length - 1} key={product.id}>
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48,
              }}
            />
          </ListItemAvatar>
          <ListItemText primary={product.name} secondary={product.updatedAt} />
          <IconButton edge="end" size="small">
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
