import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <h1>Mi Blog</h1>
        <ul>
            <PostLink id="hello-hextjs" title="hola Next.js" />
            <PostLink id="learn-nextjs" title="Aprender Next.js es sorprendente!" />
            <PostLink id="deploy-nextjs" title="Desplegar Apps con Zeit" />
        </ul>
    </Layout>
)

export default Index