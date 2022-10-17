import { format } from "date-fns";
import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../severity-pill";
import * as AWS from "aws-sdk";

AWS.config = new AWS.Config();
AWS.config.update({
  region: "ap-northeast-1",
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});
//console.log(AWS.config.credentials);

function binName(binId) {
  var bins = ["GENERAL WATE", "RECYCLING", "COMPOST", "CONTAINERS4CHANGE"];
  return bins[binId];
}

export const WasteTable = (props) => {
  const { data } = props;
  const items = data.Items.slice(0, 6);
  /*var items = [
    {
      id: props.data.Items[0].Id,
      ref: "$",
      amount: 30.5,
      customer: {
        name: props.data.Items[0].Name,
      },
      createdAt: props.data.Items[0].Time,
      status: binName(props.data.Items[0].BinNumber),
    },
    {
      id: props.data.Items[1].Id,
      ref: "$43000",
      amount: 25.1,
      customer: {
        name: props.data.Items[1].Name,
      },
      createdAt: props.data.Items[1].Time,
      status: binName(props.data.Items[1].BinNumber),
    },
    {
      id: props.data.Items[2].Id,
      ref: "$12.97",
      amount: 10.99,
      customer: {
        name: props.data.Items[2].Name,
      },
      createdAt: props.data.Items[2].Time,
      status: binName(props.data.Items[2].BinNumber),
    },
    {
      id: props.data.Items[3].Id,
      ref: "$5.79",
      amount: 96.43,
      customer: {
        name: props.data.Items[3].Name,
      },
      createdAt: props.data.Items[3].Time,
      status: binName(props.data.Items[3].BinNumber),
    },
    {
      id: props.data.Items[4].Id,
      ref: "$4.23",
      amount: 32.54,
      customer: {
        name: props.data.Items[4].Name,
      },
      createdAt: props.data.Items[4].Time,
      status: binName(props.data.Items[4].BinNumber),
    },
    {
      id: props.data.Items[5].Id,
      ref: "$1.27",
      amount: 16.76,
      customer: {
        name: props.data.Items[5].Name,
      },
      createdAt: props.data.Items[5].Time,
      status: binName(props.data.Items[5].BinNumber),
    },
  ]; */
  return (
    <Card {...props}>
      <CardHeader title="Latest Items" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow hover key={item.Id}>
                  <TableCell>{item.Name}</TableCell>
                  <TableCell>{item.Time}</TableCell>
                  <TableCell>
                    <SeverityPill
                      color={
                        (binName(item.BinNumber) === "RECYCLING" &&
                          "warning") ||
                        (binName(item.BinNumber) === "GENERAL WASTE" &&
                          "error") ||
                        (binName(item.BinNumber) === "COMPOST" && "success") ||
                        (binName(item.BinNumber) === "CONTAINERS4CHANGE" &&
                          "info") ||
                        "error"
                      }
                    >
                      {binName(item.BinNumber)}
                    </SeverityPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};
