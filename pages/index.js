import fetch from 'isomorphic-unfetch'
import React,{useState} from 'react'

const Index = ({ reddit }) => {
  
  let __redditDefault = reddit
  
  const [rjson,setRjson] = useState(__redditDefault)

  async function teste(tag){
    const response = await fetch(`http://localhost:3000/api/reddit/${tag}`)
    const reddit = await response.json()
    setRjson(reddit)
  }

  return <div>

          <input id="tag" type="text"/>

          <input type="button" value="buscar" onClick={()=>teste(document.querySelector('#tag').value)}/>

          <ul>
            {rjson.data.children.map((p, i) => (
            <li key={i}>{p.data.title}</li>
            ))}
          </ul>
        </div> 
  }



Index.getInitialProps = async () => {
  const response = await fetch(`http://localhost:3000/api/reddit/zelda`)
  const reddit = await response.json()

  return { reddit }
}

export default Index