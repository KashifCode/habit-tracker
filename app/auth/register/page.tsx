import { Suspense } from "react";

import { RegisterForm } from "@/components/auth/register-form";

export const Register = () => {
  return (
    <Suspense>
        <RegisterForm />
    </Suspense>
  )
}
