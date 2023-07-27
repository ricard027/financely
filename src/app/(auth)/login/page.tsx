"use client";

import React, { FunctionComponent, ReactNode } from "react";
import { ButtonComponent } from "../components/button/button-component";
import InputComponent from "../components/input/input-component";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface ILoginProps {
  children: ReactNode;
}

const schema = z.object({
  email: z.string().min(1, { message: "Required" }),
  password: z
    .string()
    .min(8, { message: "A senha precisa ter pelo menos 8 digitos" }),
});

const LoginContainer: FunctionComponent<ILoginProps> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      {children}
    </div>
  );
};

function LoginPage() {
  const { register, formState, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const { errors } = formState;

  const handlesubmitPress = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <LoginContainer>
      <InputComponent
        placeholder={"digite seu email"}
        hasError={!!errors?.email}
        label={"email"}
        {...register("email", { required: true })}
      />
      <InputComponent
        placeholder={"digite sua senha"}
        hasError={!!errors?.password}
        label={"Senha"}
        {...register("password", { required: true })}
      />
      <ButtonComponent onClick={() => handleSubmit(handlesubmitPress)()}>
        Entrar
      </ButtonComponent>
    </LoginContainer>
  );
}
export default LoginPage;
