import moment from "moment-hijri";
import Container from "../components/Container";
import CreateTask from "../components/createTask";
import Tasks from "../components/tasks";

export default function Home() {
  return (
    <Container className="mt-10">
      <div className="flex items-start gap-4 flex-col w-full">
        <h1 className="text-3xl font-bold capitalize max-md:text-2xl">صبحك الله بالخير</h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs capitalize">
          {moment().format("iDD iMMMM iYYYY")+" ه"}
        </p>
      </div>
      <CreateTask />
      <hr className="w-full h-[1px] bg-[#e8e8e8] dark:bg-[#222] border-0 my-2" />
      <Tasks />
    </Container>
  );
}
