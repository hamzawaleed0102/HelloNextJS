import Link from 'next/link'
import Header from '../components/Header';
import Layout from '../components/MyLayout';
const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)
const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Next.js is awesome" />
            <PostLink title="Deploy Apps with Zeit" />
        </ul>
    </Layout>
)

export default Index;