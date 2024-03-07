import StatusLabel, { Status } from "@/components/Status/StatusLabel";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello</h1>
      <AddCompanyBtn />
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
