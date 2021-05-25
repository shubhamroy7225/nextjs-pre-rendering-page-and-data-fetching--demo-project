import path from "path";
import fs from "fs/promises";
import Link from "next/link";
export default function Home(props) {
  const { products } = props;
  return (
    <div>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </div>
  );
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    return jsonString;
  });
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
