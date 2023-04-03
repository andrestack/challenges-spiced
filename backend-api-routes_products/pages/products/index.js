import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Products() {
  const { data, error, isLoading } = useSWR(`/api/products/`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((fish) => (
        <li key={fish.id}>
          {fish.id}, {fish.name}, {fish.description}, {fish.price},
          {fish.currency}
        </li>
      ))}
    </ul>
  );
}

// <ul>
//                 {activities.map((activity) => (
//                     <ListItem
//                         onDeleteActivity={onDeleteActivity}
//                         key={activity.id}
//                         activity={activity}
//                     />
//                 ))}

//name. descrotpiosm, , price, currency, category,
//             </ul>
