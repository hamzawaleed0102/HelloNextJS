import Link from 'next/link'
import Header from '../components/Header';
import Layout from '../components/MyLayout';
const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello Next.js" id="hello-nextjs" />
            <PostLink title="Next.js is awesome" id="learn-nextjs" />
            <PostLink title="Deploy Apps with Zeit" id="deploy-nextjs" />
        </ul>
    </Layout>
)

export default Index;