import StepOne from "./StepForm/Step1";
import StepTwo from "./StepForm/Step2";
import StepThree from "./StepForm/Step3";

export default function StepForm({ currentStep }) {
  return (
    <>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
    </>
  )
}