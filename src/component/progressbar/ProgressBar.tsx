import React, { FC } from "react";
import { useRouter } from "next/router";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface steps {
  StepsProps: Array<{ id: number; name: string; status: string }>;
}
const ProgressBar: FC<steps> = ({ StepsProps }) => {
  const router = useRouter();
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {StepsProps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== StepsProps.length - 1 ? "pr-6 sm:pr-12" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-1 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-[0.5px] w-full bg-gray-200" />
                </div>
                <button
                  type="button"
                  className="group relative w-10 h-10 flex items-center justify-center bg-red-300 border-2 border-gray-100 rounded-full font-sans font-normal text-sm"
                >
                  {step.id}
                </button>
              </>
            ) : (
              <>
                <div className="absolute  flex items-center">
                  <div className="h-screen w-full bg-gray-200" />
                </div>
                <button
                  type="button"
                  className="group relative w-10 h-10 flex items-center justify-center bg-blue-500 border-2 border-gray-100 rounded-full font-sans font-normal text-sm"
                >
                  {step.id}
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default ProgressBar;
