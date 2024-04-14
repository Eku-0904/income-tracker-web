import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

interface FinalStepProps {
  goToDashboard: () => void;
}

const FinishStep: React.FC<FinalStepProps> = ({ goToDashboard }) => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    goToDashboard();
    router.push("/dashboard")
  };

  return (
    <Button
      sx={{
        marginTop: "40px",
      }}
      variant="contained"
      onClick={handleGoToDashboard}
    >
      Go to Dashboard
    </Button>
  );
};

export default FinishStep;
