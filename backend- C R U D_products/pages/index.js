import ProductForm from "components/ProductForm";
import ProductList from "../components/ProductList";
import styled from "styled-components";
import useSWR from "swr";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export default function HomePage() {
  const products = useSWR("/api/products");

  async function handleAddProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(products, {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      products.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
const header = "Update Fish"
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} />
      <hr />
      <ProductList />
    </>
  );
}
