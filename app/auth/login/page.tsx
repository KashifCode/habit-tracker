import { Suspense } from "react";

import { LoginForm } from "@/components/auth/login-form";
import { AuthWrapper } from "@/components/auth/auth-wrapper";

const LoginPage = () => {

  return (
    <Suspense>
      <AuthWrapper>
        <LoginForm />
      </AuthWrapper>
    </Suspense>
  )
}

export default LoginPage;