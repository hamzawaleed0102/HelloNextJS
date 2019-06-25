import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
const PostLink = ({ show }) => (
    <li>
        <Link href={`/post?title=${show.name}`} as={`/p/${show.id}`}>
            <a>{show.name}</a>
        </Link>
    </li>
)
const Index = props => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {props.shows.map(show => <PostLink show={show} />)}
        </ul>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {
        shows: data.map(entry => entry.show)
    }
}

export default Index;