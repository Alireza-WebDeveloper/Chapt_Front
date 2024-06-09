import { useParams } from "react-router-dom";
import { useFetchGetJobById } from "../../hooks/job/use-http";
import Detail from "../../Components/Home/job/Detail";

const Page = () => {
  const { id }: any = useParams();
  const { job, error } = useFetchGetJobById({ id });
  console.log(error);
  return <div>{job && <Detail item={job} />}</div>;
};

export default Page;
