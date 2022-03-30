import { useParams } from "react-router";
function DetailsPage() {
  const { id } = useParams();
  return <div>{`details for id ${id}`}</div>;
}

export default DetailsPage;
