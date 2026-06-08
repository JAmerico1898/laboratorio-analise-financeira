import { notFound } from "next/navigation";
import { getModuleData } from "@/data/modules-registry";
import { ModulePage } from "@/components/module/module-page";

export default async function Page({ params }: { params: Promise<{ modulo: string }> }) {
  const { modulo } = await params;
  const data = getModuleData(modulo);
  if (!data) notFound();
  return <ModulePage data={data} />;
}
