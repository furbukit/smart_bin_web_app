import { format } from "date-fns";
import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
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
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
});

var items = [
  {
    id: uuid(),
    ref: "%x",
    amount: 30.5,
    customer: {
      name: "bread",
    },
    createdAt: 1243412513,
    status: "RECYCLING",
  },
  {
    id: uuid(),
    ref: "$43000",
    amount: 25.1,
    customer: {
      name: "Lettuce",
    },
    createdAt: 1555016400000,
    status: "COMPOST",
  },
  {
    id: uuid(),
    ref: "$12.97",
    amount: 10.99,
    customer: {
      name: "Chicken Breast 1Kg",
    },
    createdAt: 1554930000000,
    status: "GENERAL WASTE",
  },
  {
    id: uuid(),
    ref: "$5.79",
    amount: 96.43,
    customer: {
      name: "Emu Export 330mL Bottle",
    },
    createdAt: 1554757200000,
    status: "CONTAINERS4CHANGE",
  },
  {
    id: uuid(),
    ref: "$4.23",
    amount: 32.54,
    customer: {
      name: "Uncle Toby's Oats 500g",
    },
    createdAt: 1554670800000,
    status: "RECYCLING",
  },
  {
    id: uuid(),
    ref: "$1.27",
    amount: 16.76,
    customer: {
      name: "Apple",
    },
    createdAt: 1554670800000,
    status: "COMPOST",
  },
];
const docClient = new AWS.DynamoDB.DocumentClient();

export function WasteTable() {
  var params = {
    FilterExpression: "BinNumber > :b",
    ExpressionAttributeValues: {
      ":b": -1,
    },
    TableName: "items",
  };
  docClient.scan(params, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (!err) {
      console.log(data);
      return (
        <Card>
          <CardHeader title="Latest Items" />
          <PerfectScrollbar>
            <Box sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Cost</TableCell>
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
                    <TableRow hover key={item.id}>
                      <TableCell>{item.ref}</TableCell>
                      <TableCell>{item.customer.name}</TableCell>
                      <TableCell>
                        {format(item.createdAt, "dd/MM/yyyy")}
                      </TableCell>
                      <TableCell>
                        <SeverityPill
                          color={
                            (item.status === "RECYCLING" && "warning") ||
                            (item.status === "GENERAL WASTE" && "error") ||
                            (item.status === "COMPOST" && "success") ||
                            (item.status === "CONTAINERS4CHANGE" && "info") ||
                            "error"
                          }
                        >
                          {item.status}
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
    }
  });
}
