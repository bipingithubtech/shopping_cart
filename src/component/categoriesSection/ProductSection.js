import React from "react";
import { useGlobal } from "../constext/Context";

import Gridviews from "../Gridviews";
import Listview from "../Listview";

const ProductSection = () => {
  const { store, grid } = useGlobal();

  if (grid) {
    return <Gridviews store={store} />;
  }
  if (grid === false) {
    return <Listview store={store} />;
  }
};

export default ProductSection;
