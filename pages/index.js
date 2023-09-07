import { useState, useEffect } from 'react'
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const[data, setData]=useState([]);
  const [username, setInput] = useState('');
  useEffect(()=>{

   // const url = 'https://api.github.com/users/${username}';

    fetch('https://api.github.com/users/${username}')
    .then(response => response.json())
    .then(data => {
      if (data && data.message) {
        setData([data.message]); // HNA ERR KANT BLA ARRAY
      }
    })
    .catch(error => console.error('Error:', error));
}, [username]);


console.log(data);

  return (
    <div className="card">
      <Form setInput={setInput} />
      <UserCard setData={setData} name={data.name} user={data.login} avatar={data.avatar_url}/>
    </div>
  );
}
