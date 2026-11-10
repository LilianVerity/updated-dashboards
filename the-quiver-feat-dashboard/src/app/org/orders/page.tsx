import { Header } from "../../components/ui/Header";import { braahOne, lato } from "../../../lib/fonts";

export const metadata = {
  title: "Orders | The Quiver Seller Hub",
};

export default function OrgOrdersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FBFFFB] to-[#E4FFCC]">
      <Header loggedIn />

      <main className="mx-auto w-full max-w-[960px] flex-1 px-5 pb-16 pt-12 sm:px-8">
        <h1 className={`${braahOne.className} text-[32px] text-[#199E72] sm:text-[36px]`}>
          Orders
        </h1>
        <p className={`${lato.className} mt-1 text-[12.5px] text-[#8DBBA6]`}>
          View and manage orders from your customers.
        </p>

        {/* later: add the orders content here */}
      </main>

      <footer className="border-t border-[#C9D6CE] bg-[#F3FFF6] py-4 text-center">
        <p className={`${braahOne.className} text-[12px] text-[#199E72]`}>
          © 2026 The Quiver. All rights reserved.
        </p>
      </footer>
    </div>
  );
}