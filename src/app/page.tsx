import StatusLabel from "@/components/Status/StatusLabel";
import AddCompanyBtn from "@/components/addCompany/AddCompanyBtn";
import { CompanyStatus } from "@/lib/interface";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello</h1>
      <AddCompanyBtn />
      <StatusLabel status={CompanyStatus.Active} />
      <StatusLabel status={CompanyStatus.NotActive} />
      <StatusLabel status={CompanyStatus.Pending} />
      <StatusLabel status={CompanyStatus.Suspended} />
    </main>
  );
}
