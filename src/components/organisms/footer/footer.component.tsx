import { AppConfig } from "@/utils/appConfig";

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{" "}
      <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
    </footer>
  );
};

export { Footer };
