import Navbar from "@/components/Navbar";
import Layout from "@/components/layout";
import Todos from "@/pages/todos";

export default function Home() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="text-5xl font-extrabold ... bg-black	">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>
      </Layout>
      <Todos />
    </>
  );
}
