// "use client"
// import { useParams } from "next/navigation";

const BlogPage = ({params}: {params: {slug: string}}) => {
    // const params = useParams();
    return (
        <h1 style={{marginTop: '100px'}}>BlogPage {params.slug}</h1>
    )
}

export default BlogPage;