"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const Register = () => {
  return (
    <section className="max-w-[280px] rounded-none border bg-white px-5 py-10 shadow-md sm:min-w-[520px] sm:px-8">
      <AuthForm
        formType="signup"
        schema={SignUpSchema}
        defaultValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => Promise.resolve({ success: true, values })}
      />
    </section>
  );
};

export default Register;