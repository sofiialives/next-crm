import StatusLabel from "@/components/Status/StatusLabel";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";
import { CompanyStatus } from "@/lib/interface";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello</h1>
      <AddCompanyBtn />
      <StatusLabel status={CompanyStatus.Active}>Active</StatusLabel>
      <StatusLabel status={CompanyStatus.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={CompanyStatus.Pending}>Pending</StatusLabel>
      <StatusLabel status={CompanyStatus.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
