import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserProfile() {
  const user = {
    name: "John Doe",
    userName: "@",
    bio: "Software Developer | Tech Enthusiast",
    followers: 1000,
    following: 500,
    posts: 50,
    imageUrl: "https://via.placeholder.com/150",
  };

  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src={user.imageUrl} className="img-fluid rounded-circle" alt="User" />
          </div>
          <div className="col-md-9">
            <h2>{user.name}</h2>
            <p>{user.userName}</p>
            <p>{user.bio}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Posts: {user.posts}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
