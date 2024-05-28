import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Register", // sets title to this value, ignoring all other templates
  },
};
export default function Register() {
  return <h1>Register</h1>;
}
