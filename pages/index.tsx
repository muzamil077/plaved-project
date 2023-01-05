import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Button from "../src/component/Button";
import FormInput from "../src/component/Input";
import LoginScreen from "./ looginScreen";
import ForgetPasswordEmail from "./forgetPassword-email";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <LoginScreen/>
    <ForgetPasswordEmail/>
    </>
  );
}
