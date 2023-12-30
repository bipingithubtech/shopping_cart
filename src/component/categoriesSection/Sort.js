import React from "react";
import { useGlobal } from "../constext/Context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const { setGrid, setList, store, sort } = useGlobal();
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
        <div className="sort-selection">
          <form action="">
            <label htmlFor="sort">
              <select id="sort" onClick={sort}>
                <option value="lowest">price(lowest)</option>
                <option value="#" disabled></option>
                <option value="highest">price(highest)</option>
                <option value="#" disabled></option>
                <option value="a-z">price(a-z)</option>
                <option value="#" disabled></option>
                <option value="z-a">price(z-a)</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sort;
