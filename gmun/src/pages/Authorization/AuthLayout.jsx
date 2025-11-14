import FloatingShapes from "../../components/Authorization/FloatingShapes";
import "./auth.css";

const AuthLayout = () => {
  return (
    <div className="auth-parent">
      <FloatingShapes
        color="#22c55e"
        width="16rem"
        height="16rem"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShapes
        color="#22c55e"
        width="8rem"
        height="8rem"
        top="-5%"
        left="10%"
        delay={2}
      />

      <FloatingShapes
        color="#22c55e"
        width="12rem"
        height="12rem"
        top="45%"
        left="70%"
        delay={5}
      />
    </div>
  );
};

export default AuthLayout;
