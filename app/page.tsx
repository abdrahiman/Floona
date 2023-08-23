import moment from "moment";
import Container from "../components/Container";
import CreateTask from "../components/createTask";
import Tasks from "../components/tasks";

export default function Home() {
  return (
    <Container className="mt-20">
      <div className="flex items-end gap-4">
        <h1 className="text-3xl font-bold capitalize max-md:text-2xl">Today</h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs capitalize">
          {moment().format("MMMM DD, YYYY")}
        </p>
      </div>
      <CreateTask />
      <hr className="w-full h-[1px] bg-[#ddd] dark:bg-[#222] border-0 my-4" />
      <Tasks />
    </Container>
  );
}
