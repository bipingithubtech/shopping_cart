import Product from "./Product";
import { useGlobal } from "./constext/Context";

const Home = () => {
  const { loading, categoriesProducts } = useGlobal();

  if (loading) {
    return <h1>......LOADING</h1>;
  }
  return (
    <div className="container">
      <div style={{ textAlign: "center", fontSize: "25px" }}>
        Check our services
      </div>
      <h1>Products</h1>
      <div className="box">
        {categoriesProducts &&
          categoriesProducts.map((element) => {
            return <Product key={element.id} {...element} />;
          })}
      </div>
    </div>
  );
};

export default Home;
