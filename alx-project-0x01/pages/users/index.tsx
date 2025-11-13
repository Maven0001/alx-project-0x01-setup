import Header from "@/components/layout/Header";
import React from "react";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
