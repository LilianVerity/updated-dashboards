"use client";

import { useState } from "react";
import { Header } from "../../components/ui/Header";
import { Footer } from "../../components/ui/Footer";
import { braahOne, lato } from "../../../lib/fonts";
import type { Org } from "./data";
import OrgBrowser from "./OrgBrowser";

type CampusOrgsProps = {
  yourOrgs: Org[];
  collegeOrgs: Org[];
  allOrgs: Org[];
};

// the whole campus orgs page: header (with search), title, org sections, footer
// this is a client component because the search lives in the header (same as the home page)
export default function CampusOrgs({ yourOrgs, collegeOrgs, allOrgs }: CampusOrgsProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FBFFFB] to-[#E4FFCC]">
      {/* loggedIn + student shows the student header, passing the search makes the search bar show up */}
      <Header loggedIn student searchValue={search} onSearchChange={setSearch} />

      <main className="mx-auto w-full max-w-[960px] flex-1 px-5 pb-16 pt-12 sm:px-8">
        <h1 className={`${braahOne.className} text-[32px] text-[#199E72] sm:text-[36px]`}>
          Campus Orgs
        </h1>
        <p className={`${lato.className} mt-1 text-[12.5px] text-[#8DBBA6]`}>
          Shop for merchandise by campus organizations.
        </p>

        <OrgBrowser
          search={search}
          yourOrgs={yourOrgs}
          collegeOrgs={collegeOrgs}
          allOrgs={allOrgs}
        />
      </main>

      <Footer />
    </div>
  );
}