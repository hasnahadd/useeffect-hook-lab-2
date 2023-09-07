export default function UserCard({name ,user, avatar}) {

  return (

    <div className="user-card">
      <div>
        <img src= {avatar} alt="avatar" />
      </div>
      <div>
        
        <h5> Name:{name}</h5>

        <p> Username: {user}</p>
      </div>
    </div>
  );
}
