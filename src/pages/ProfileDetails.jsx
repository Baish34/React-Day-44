import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfileDetails = () => {
  const { userId } = useParams();

  const userData = {
    john_doe: {
      fullName: "John Doe",
      bio: "Software Developer | Tech Enthusiast",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: "Jane Smith",
      bio: "Graphic Designer | Nature Lover",
      imageUrl: "https://via.placeholder.com/250",
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: "Alice Wonder",
      bio: "Travel Blogger | Foodie",
      imageUrl: "https://via.placeholder.com/150",
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const profileData = userData[userId];

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src={profileData.imageUrl} alt="User" />
          </div>
          <div className="col-md-9">
            <div className="ps-5">
              <h2>{profileData.fullName}</h2>
              <p>@{userId}</p>
              <p>{profileData.bio}</p>
              <p>Followers: {profileData.followers}</p>
              <p>Following: {profileData.following}</p>
              <p>Posts: {profileData.posts}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfileDetails;
