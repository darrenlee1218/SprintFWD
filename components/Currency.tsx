import React from "react";
import { NumericFormat } from 'react-number-format';

interface Props {
  price: number;
  prefix?: string;
}

function Currency({ price, prefix = "$" }: Props) {
  return (
    <NumericFormat
      value={price}
      displayType={"text"}
      thousandSeparator={true}
      prefix={prefix}
      decimalScale={2}
    />
  );
}

export default Currency;
