import React from "react";
type Props = {
  params: { id: string };
};
const ProductDetails = ({ params: { id } }: Props) => {
  return <div>{id}</div>;
};

export default ProductDetails;
