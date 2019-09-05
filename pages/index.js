import fetch from 'isomorphic-unfetch'

const Index = ({ reddit }) => (

  <ul>
    
    {reddit.data.children.map((p, i) => (
      <li key={i}>{p.data.title}</li>
    ))}
  </ul>
)

Index.getInitialProps = async () => {
  const response = await fetch(`http://localhost:3000/api/reddit/zelda`)
  const reddit = await response.json()

  return { reddit }
}

export default Index