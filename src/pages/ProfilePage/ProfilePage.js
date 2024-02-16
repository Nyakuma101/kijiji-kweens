import SuperSeller from "../../components/SuperSeller/SuperSeller";
import usersData from "../../data/users.json";
import { useParams } from "react-router-dom";

// const user1 = {
//   username: "Christopher Shannon",
//   memberSince: "2023-02-15",
//   totalReviews: 15,
//   averageRating: 4.5,
// };

// const user2 = {
//   username: "Another User",
//   memberSince: "2022-11-01",
//   totalReviews: 12,
//   averageRating: 4.8,
// };

export default function ProfilePage() {
  const { profileId } = useParams();

  const numericProfileId = parseInt(profileId, 10);

  const currentUser = usersData.find(
    (user) => user.profileId === numericProfileId
  );

  if (!currentUser) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <SuperSeller user={currentUser} />

      {/* {usersData.map((user, index) => (
        <SuperSeller key={index} user={user} />
      ))} */}
    </div>
  );
}
