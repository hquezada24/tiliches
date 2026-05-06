import { Metadata } from "next";
import ContactPage from "@/components/main/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Quezada Lawn Care",
};
const RequestAQuotePage = () => {
  return <ContactPage />;
};

export default RequestAQuotePage;
