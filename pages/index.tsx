import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Button from "../src/component/Button";
import FormInput from "../src/component/Input";
import LoginScreen from "./ looginScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <LoginScreen/>
      {/* <main className="w-24 h-24">
        <h1 className="bg-red-400 underline">hello</h1>
        <Button
          onClick={() => alert("Button 1 is clicked !")}
          variant="default"
          size="lg"
        >
          {" "}
          Default{" "}
        </Button>

        <Button
          onClick={() => alert("Button 1 is clicked !")}
          variant="success"
          size="lg"
        
        >
          {" "}
          Danger{" "}
        </Button>
        <FormInput label={"name"} placeholder={"inter your name"}/>
      </main> */}
    </>
  );
}
