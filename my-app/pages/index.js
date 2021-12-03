import styles from "../styles/Home.module.css";

export default function Home({ data, hasError }) {
  if (hasError) return <div>Something went wrong!!!</div>;
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const loadData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return data;
    };

    const data = await loadData();

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        hasError: true,
      },
    };
  }
}
