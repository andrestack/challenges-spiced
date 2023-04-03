import { useRouter } from "next/router";
import useSWR  from "swr";

export default function ProductListHandle(request, response) {
  const { id } = request.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`);

  return 
  <>
  
  </>
}
