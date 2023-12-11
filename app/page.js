import Features from "./components/Features";
import Hero from "./components/Hero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import SuccessCount from "./components/SuccessCount";
import Businesses from "./components/businesses/Businesses";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Businesses />
      <SuccessCount />
      <LatestPosts />
    </div>
  );
}
