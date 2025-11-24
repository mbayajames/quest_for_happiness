// app/layout.tsx
import { FloatingContact } from "@/components/Hero";
import { ScrollButtons } from "../components/ScrollButtons";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      {/* Floating Elements - Visible on ALL pages */}
      <FloatingContact />
      <ScrollButtons />
    </>
  );
}