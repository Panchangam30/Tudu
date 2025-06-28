import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-green-600 mb-4">About</h1>
      <p className="text-lg text-gray-700 mb-2">This is the about page</p>
      <p>
        <Link href="/" className="text-green-500 underline">Go home</Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;
