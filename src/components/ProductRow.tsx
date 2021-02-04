import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import { Product } from "../models/Product";
import { Link, Route, useRouteMatch } from "react-router-dom";
import ManageProduct from "./ManageProduct";

type Props = {
  product: Product;
};

const ProductRow: React.FC<Props> = (props: Props) => {
  const { product: row } = props;
  const { url, path } = useRouteMatch();

  return (
    <TableRow key={row._id}>
      <TableCell component="th" scope="row">
        <Link to={`/manageProduct/${row._id}`}>{row.title}</Link>
        <Route path={`${path}/manageProduct/:productId`} component={ManageProduct}></Route>
      </TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.rating}</TableCell>
      <TableCell align="right">{row.stockCount - row.soldCount}</TableCell>
      <TableCell align="right">
        <Button variant="contained" color="primary">
          Buy Now
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
