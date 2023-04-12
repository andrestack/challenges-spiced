import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "components/Comments";
import ProductForm from "components/ProductForm";

export default function Product({ onSubmit, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>{data.reviews.length} review(s)</p>

      <Comments reviews={data.reviews} />
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
      <StyledButton type="button" onClick={() => onDelete(id)}>
        Delete
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </StyledButton>
      {isEditMode && (
        <ProductForm onSubmit={onSubmit}></ProductForm>
      )}
       
    </ProductCard>
  );
}
