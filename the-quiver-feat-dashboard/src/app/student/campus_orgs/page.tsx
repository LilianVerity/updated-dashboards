import CampusOrgs from "./CampusOrgs";
import { getCampusOrgsData } from "./data";

export const metadata = {
  title: "Campus Orgs | The Quiver",
};

export default function StudentCampusOrgsPage() {
  // dummy data for now
  const { yourOrgs, collegeOrgs, allOrgs } = getCampusOrgsData();

  return <CampusOrgs yourOrgs={yourOrgs} collegeOrgs={collegeOrgs} allOrgs={allOrgs} />;
}