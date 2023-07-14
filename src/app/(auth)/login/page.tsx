"use client";
import { ButtonComponent } from "../components/button/button-component";

function LoginPage() {
  return (
    <div>
      <input type="text" />
      <ButtonComponent primary={true}>Entrar</ButtonComponent>
    </div>
  );
}
export default LoginPage;
