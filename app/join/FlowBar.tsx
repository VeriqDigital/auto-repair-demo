type FlowBarProps = {
  currentStep: number;
};

const steps = ["Plan", "Profile", "Review", "Payment"];

const FlowBar = ({ currentStep }: FlowBarProps) => {
  return (
    <div className="flex justify-center bg-black py-8 text-white">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isComplete = index < currentStep;
          const isReached = isActive || isComplete;

          return (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full text-sm font-black transition-colors duration-200",
                    isReached
                      ? "bg-white text-black"
                      : "bg-zinc-800 text-white/45",
                  ].join(" ")}
                >
                  {index + 1}
                </div>
                <span
                  className={[
                    "mt-2 text-[10px] font-black uppercase tracking-widest transition-colors duration-200",
                    isReached ? "text-white" : "text-white/35",
                  ].join(" ")}
                >
                  {step}
                </span>
              </div>

              {index < steps.length - 1 ? (
                <div
                  className={[
                    "mx-2 h-px w-16 transition-colors duration-200 md:mx-4",
                    isComplete ? "bg-white" : "bg-white/20",
                  ].join(" ")}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlowBar;

/*
Should be 4 circles 
Plan -> Profile -> Review -> Payment
Each circle is gray and the current and past steps are white 
The circles should be connected by a gray line that turns white after the step is reached
The circles should be props most likely that get passed in dynamically per step
There should be a back button to go to the previous step
The next button on the checkout bar should take the user to the next step and change the current step in the flow bar
*/
