import Layout from '../components/Layout'

const Content = (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>Aqui el contenido del post en el blog!</p>
    </div>
)

export default (props) => (

    <Layout>
        <Content url={props.url} />
    </Layout>
)