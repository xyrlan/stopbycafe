import { Navbar } from "@/components/navbar";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Navbar isNavOnHero={false} visible={true} />
      {children}
    </div>
  );
}
