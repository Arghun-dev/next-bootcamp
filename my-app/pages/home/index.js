import Link from "next/link";

const Home = () => {
  return (
    <div>
      Home Page{" "}
      <Link href="/">
        <a style={{ color: "green" }} target="_blank">
          First Page
        </a>
      </Link>
    </div>
  );
};

export default Home;
