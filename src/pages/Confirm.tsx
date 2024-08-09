import { FC } from "react";
import Confirm from "../components/Confirm";
import { useAuthRedirect } from "../hooks/useAuthRedirect";

const ConfirmPage: FC = () => {
  useAuthRedirect();
  return (
    <>
      <Confirm />
    </>
  );
};

export default ConfirmPage;
