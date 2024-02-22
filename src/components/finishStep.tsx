import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

interface FinalStepProps {
  goToDashboard: () => void;
}

const FinalStep: React.FC<FinalStepProps> = ({ goToDashboard }) => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/dashboard");
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

export default FinalStep;
