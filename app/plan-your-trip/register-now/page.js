import { Suspense } from "react";
import RegisterForm from "./register-form";
import { travelPackages } from "../packages/packages";

async function RegisterPageContent({ searchParams }) {
  const { package: packageId } = await searchParams;
  const initialPackage = travelPackages.some(
    (travelPackage) => travelPackage.id === packageId,
  )
    ? packageId
    : "";

  return <RegisterForm initialPackage={initialPackage} key={initialPackage} />;
}

export default function RegisterPage({ searchParams }) {
  return (
    <Suspense fallback={<p>Loading registration form...</p>}>
      <RegisterPageContent searchParams={searchParams} />
    </Suspense>
  );
}
