import { Suspense } from "react";

import { RegisterForm } from "@/components/auth/register-form";
import { AuthWrapper } from "@/components/auth/auth-wrapper";

const RegsiterPage = () => {
  return (
    <Suspense>
      <AuthWrapper>
        <RegisterForm />
      </AuthWrapper>
    </Suspense>
  )
}

export default RegsiterPage;