import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SelectTextFields from "../../components/currency";
import BalanceStep from "../../components/balance";
import FinalStep from "../../components/finishStep";
import { GeldIcon } from "@/components/icons/GeldIcon";

const steps = ["Select base currency", "Your balance", "Finish"];

const StepperPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleGoToDashboard = () => {
    // Navigate to the dashboard or perform any other action
    console.log("Navigating to dashboard...");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
        <GeldIcon/> 
      <Stepper activeStep={activeStep} 
      sx={{ 
        width: "500px",
        marginTop: "30px",
     }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper >
      {activeStep === 0 ? (
        <SelectTextFields handleNext={handleNext} />
      ) : activeStep === 1 ? (
        <BalanceStep handleNext={handleNext} />
      ) : activeStep === 2 ? (
        <FinalStep goToDashboard={handleGoToDashboard} />
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Box>
  );
};

export default StepperPage;
