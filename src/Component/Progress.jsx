import React from "react";

function Progress({ page }) {
  const totalSteps = 4;

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap px-4 py-6">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isCompleted = step < page;
        const isCurrent = step === page;
        // eslint-disable-next-line no-unused-vars
        const isUpcoming = step > page;

        return (
          <>
            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-bold
                ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : isCurrent
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-500 border border-gray-400"
                }
              `}
            >
              {isCompleted ? "✓" : step}
            </div>

            {step !== totalSteps && (
              <div
                className={`h-1 w-10 sm:w-14 md:w-16 
                  ${
                    isCompleted
                      ? "bg-green-600"
                      : isCurrent
                      ? "bg-gradient-to-r from-green-600 to-gray-300"
                      : "bg-gray-300"
                  }
                `}
              ></div>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Progress;
