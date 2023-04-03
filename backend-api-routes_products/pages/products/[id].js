import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";


const StyledDiv=styled.div`
padding: 10px;
border: 10px dotted lightblue;
margin: 10px
`

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductListHandle() {
  const router = useRouter();
  const {id} = router.query;

  
  

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  


  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <StyledDiv>
      <p>{data.id}</p>
      <h3>{data.name}</h3>
      <li>{data.description}</li>
      <li>
        {data.price} {data.currency}
      </li>
      <li>{data.category}</li>
      </StyledDiv>
  
)}
