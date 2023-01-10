import React from "react";
import Link from "next/link";
import { SiVisa } from "react-icons/si";
import { RiErrorWarningFill } from "react-icons/ri";
import { useRouter } from "next/router";

import RagistrationUserOne from "../RagistrationUserOne";
import ProgressBar from "../../src/component/progressbar/ProgressBar";
import FormInput from "../../src/component/Input";
import Button from "../../src/component/Button";
export default function BillingPage() {
  const [carHoldername, setcarHoldername] = React.useState("");
  const [cardNumber, setcardNumber] = React.useState("");
  const [expirationDate, setexpirationDate] = React.useState("");
  const [cvvNumber, setcvvNumber] = React.useState("");
  const steps = [
    { id: 1, name: "Step 1", status: "complete" },
    { id: 2, name: "Step 2", status: "complete" },
    { id: 3, name: "Step 3", status: "complete" },
    { id: 4, name: "Step 4", status: "complete" },
    { id: 5, name: "Step 5", status: "upcoming" },
  ];
  const router = useRouter();
  const submitForm = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData); // convert the FormData object to a JSON object

    router.push("/register/summary");
  };
  return (
    <div className=" w-full">
      <div className="h-[80vh] mt-12 w-[100%] flex flex-col items-center justify-around col-span-2 ">
        <div className="hidden flex overflow-hidden lg:block ">
          <ProgressBar StepsProps={steps} />
        </div>
        <div className="space-y-3">
          <h3 className="text-[32px] font-medium font-600 text-black-500 text-center">
            Billing Information
          </h3>
          <p className="text-sm text-normal text-[#4F4F4F] leading-loose text-center">
            One last step! Add your credit card and continue billing
          </p>
        </div>
        <div className="w-[40%]">
          <form className="w-[100%]" onSubmit={submitForm}>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col items-center">
                <div className="w-[100%] xl:w-[60%] lg:w-[80%] md:w-[90%]">
                  <FormInput
                    id="companyName"
                    type="text"
                    name="companyName"
                    placeholder="Card Holder Name"
                  />
                  <div className="mt-4 mb-4">
                    <FormInput
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Dirección"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 w-[100%] xl:w-[60%] lg:w-[80%] md:w-[90%] mb-4">
                  <div>
                    <FormInput
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      placeholder="Código Postal"
                    />
                  </div>
                  <div>
                    <FormInput
                      id="country"
                      type="text"
                      name="country"
                      placeholder="País"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 w-[100%] xl:w-[60%] lg:w-[80%] md:w-[90%] ">
                  <div>
                    <FormInput
                      id="vatNumber"
                      type="text"
                      name="vatNumber"
                      placeholder="Número de IVA"
                    />
                  </div>
                  <div className="">
                    <FormInput
                      id="estimatedSize"
                      type="text"
                      name="estimatedSize"
                      placeholder="Núm. empleados"
                    />
                  </div>
                </div>
              </div>
              <div className=" mt-4 flex text-[#C3C6D1] items-center leading-10 justify-center tracking-wide">
                <span>
                  <RiErrorWarningFill className="mr-4" />
                </span>
                <p className="text-[11px] text-center italic">
                  Your Subscription will be renew on 6th of each month.
                </p>
              </div>
              <div className="flex justify-between w-[100%] xl:w-[60%] lg:w-[80%] md:w-[90%] m-auto">
                <Link href={"/register/pricing"}>
                  <Button size="md" variant="info">
                    Back
                  </Button>
                </Link>
                <Button size="md" variant="info">
                  Next
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
