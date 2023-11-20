import { DashboardLayout } from "@/components/layouts";
import { TambahData } from "@/features/products/tambah";

export default function Tambah() {
  return (
    <>
      <TambahData />
    </>
  );
}

Tambah.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
