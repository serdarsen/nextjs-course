import { useRouter } from "next/router";

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    return <div>
    Detail Page
  </div>
};
  
export default DetailPage;
  