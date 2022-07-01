import Link from "next/link";

const NewsPage = () => (
  <>
    <h1>The News Page</h1>
    <ul>
      <li>
        <Link href="/news/nextjs-is-a-great-framework">
          NextJS is a Great Framework
        </Link>
      </li>
      <li>
        <Link href="/news/something-else">
          Something Else
        </Link>
      </li>
    </ul>
  </>
);

export default NewsPage;
