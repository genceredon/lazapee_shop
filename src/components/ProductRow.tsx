import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import { Product } from "../models/Product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
  onBuyNowClick: (_id: string) => void;
};

const ProductRow: React.FC<Props> = (props: Props) => {
  const { product: row } = props;

  function handleBuyNow(e:any){
    props.onBuyNowClick(row._id);
  }

  return (
    <TableRow key={row._id}>
      <TableCell component="th" scope="row">
        <Link to={`/manageProduct/${row._id}`}>{row.title}</Link>
      </TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.rating}</TableCell>
      <TableCell align="right">{row.stockCount - row.soldCount}</TableCell>
      <TableCell align="right">
        <Button variant="contained" color="primary" onClick={handleBuyNow}
>
          Buy Now
        </Button>
      </TableCell>
    </TableRow>


  );
};

export default ProductRow;
