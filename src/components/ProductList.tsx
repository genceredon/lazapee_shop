import React, { useEffect } from "react";
import { Product } from "../models/Product";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
import { StoreState } from "../redux/StoreState";
import ProductRow from "./ProductRow";
import { ProductDecrementAction } from "../redux/actions/ActionCreators";

const ProductList = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    header: {
      color: "#ffff",
      background: "#000",
    },
  });
  const classes = useStyles();

  const dispatch = useDispatch();

  const data = useSelector<StoreState>(
    (state) => state.productList
  ) as Product[];

  useEffect(() => {
    loadProducts(dispatch);
  }, []);

  function hanldeStockDecrement(id: any) {
    dispatch(ProductDecrementAction(id, data));
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Title</TableCell>
              <TableCell align="right" className={classes.header}>
                Price&nbsp;(P)
              </TableCell>
              <TableCell align="right" className={classes.header}>
                Rating
              </TableCell>
              <TableCell align="right" className={classes.header}>
                Remaining Stock
              </TableCell>
              <TableCell className={classes.header} />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <ProductRow product={row} 
              onBuyNowClick={hanldeStockDecrement}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductList;
