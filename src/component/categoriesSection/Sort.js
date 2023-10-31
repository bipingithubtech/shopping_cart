import React from "react";
import { useGlobal } from "../constext/Context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { setGrid, setList, store } = useGlobal();
  return (
    <div className="container" style={{ width: "100%" }}>
      <div
        className="btn_grid"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <button onClick={() => setGrid()}>
            <BsFillGridFill />
          </button>
          <button onClick={() => setList()}>
            <BsList />
          </button>
        </div>

        <div>Total product is {store.length}</div>
        <div>dropdown</div>
      </div>
    </div>
  );
};

export default Sort;
