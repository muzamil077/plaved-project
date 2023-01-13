import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Button from "../src/component/Button";
import FormInput from "../src/component/Input";
import LoginScreen from "./ looginScreen";
import ResatPasswordLink from "./resatPasswordLink";
import ProgressBar from "../src/component/progressbar/ProgressBar";
import ForgetPasswordEmail from "./forgetPassword-email";
import RegistrationSidePage from "../src/component/RegistrationSidePage/RegistrationSidePage";
import RagistrationUserOne from "./RagistrationUserOne";
import BillingPage from "./Billing";
import Sidebar from "../src/component/sidebar/sidebar";
import Layout from "../src/component/Layout/Layout";
import HomePage from "./Home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LoginScreen/>
      {/* <HomePage/> */}
      {/* <BillingPage/> */}
    </>
  );
}
