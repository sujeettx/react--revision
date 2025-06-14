import { useLoaderData } from "react-router" ;
import '../index.css'
const Github = () => {
  const data = useLoaderData()
  return (
    <>
    <div className="githubCard">
        <img src={data.avatar_url} alt='Github pichture'/>
        <div>
          <h1>github username : {data.login}</h1>
        <h1>followers {data.followers}</h1>
        </div>
    </div>
    </>
  )
}

export default Github

export const fetchGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/sujeettx');
    return response.json()
}

