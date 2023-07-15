"use client";
import { ButtonComponent } from "../components/button/button-component";
import InputComponent from "../components/input/input-component";

function LoginPage() {
  return (
    <div>
      <InputComponent placeholder={"teste"} label={"teste"} />
      <ButtonComponent primary={true}>Entrar</ButtonComponent>
    </div>
  );
}
export default LoginPage;
