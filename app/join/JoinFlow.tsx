"use client";

import { useState } from "react";
import CheckoutBar from "./CheckoutBar";
import JoinPlans from "./JoinPlans";
import { membershipPlans } from "./membershipPlans";
import FlowBar from "./FlowBar";
import Profile from "./Profile";
import Review from "./Review";
import Payment from "./Payment";

const JoinFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlanId, setSelectedPlanId] = useState(membershipPlans[0].id);

  const selectedPlan =
    membershipPlans.find((plan) => plan.id === selectedPlanId) ?? null;

  const handleNext = () => {
    setCurrentStep((step) => Math.min(step + 1, 3));
  };

  const handleBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <JoinPlans
            plans={membershipPlans}
            selectedPlanId={selectedPlanId}
            onSelectPlan={setSelectedPlanId}
          />
        );
      case 1:
        return <Profile onBack={handleBack} />;
      case 2:
        return <Review />;
      case 3:
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <>
      <FlowBar currentStep={currentStep} />
      {renderCurrentStep()}
      <CheckoutBar selectedPlan={selectedPlan} onNext={handleNext} />
    </>
  );
};

export default JoinFlow;
