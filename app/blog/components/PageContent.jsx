import Container from "@/app/components/Container";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import LastestBlogPostItem from "./LatestBlogPostItem";
import BlogPostCard from "./BlogPostCard";

const posts = [
  {
    image: "/sme.jpg",
    title: "Debt-Free Journey: Start 2024 With These Tips",
    description: "Read aboutdebt snowball and debt avalanche methods...",
    date: "",
  },
  {
    image: "/thinking.jpg",
    title: "6 Habits to Level up your finances",
    description:
      "In today's fast-paced world, mastering your financial habits....",
    date: "17th December, 2023",
  },
  {
    image: "/salary.avif",
    title: "How to Save Up from your Salary",
    description: "Unlock the secrets to effective salary saving with ...",
    date: "17th December, 2023",
  },
  {
    image: "/newhome.jpg",
    title: "Investing 101: A Beginner's Guide to Wealth Building",
    description: "",
    date: "17th December, 2023",
  },

  {
    image: "/loan-school-fees.jpg",
    title: "Navigating Personal Finance Milestones",
    description: "A Financial Roadmap for Every Life Stage...",
    date: "17th December, 2023",
  },
];

const PageContent = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="w-full  grid  grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 py-8 lg:px-8 gap-5">
          {/* <div className="h-[fit-content]  rounded-lg w-full gap-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3"> */}
          {posts.map((post, i) => (
            <BlogPostCard
              image={post.image}
              title={post.title}
              description={post.description}
              key={i}
              date={post.date}
            />
          ))}
          {/* </div> */}

          {/* <div className="hidden lg:flex h-[fit-content] w-full bg-[#f7f7f7] shadow-md rounded-lg px-4 py-8  flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="border flex items-center border-solid border-[#d9d9d980] h-10 px-2 py-2 gap-2 rounded-md outline-none">
                <IoMdSearch color="#979797" />
                <input
                  className="text-sm border-none outline-none h-8  bg-[#f7f7f7]"
                  type="text"
                  placeholder="Search blog posts by title"
                />
              </div>
              <button className="text-sm uppercase bg-[#FFB600] px-2 py-2 rounded-md text-black">
                Search
              </button>
            </div>

            <h3 className="my-2">Our Latest Blog Posts</h3>

            <div className="flex flex-col gap-2">
              {[1, 2, 3, 3].map((item, i) => (
                <LastestBlogPostItem
                  key={i}
                  title={"Get ahead of your finances"}
                  description={
                    "Finances can be a very tricky thing to handle..."
                  }
                  image={"/handshake.jpg"}
                  url={"/"}
                />
              ))}
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default PageContent;
