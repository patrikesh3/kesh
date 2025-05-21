import profilepic from './assets/Keshii.png.png'
function Card(){
return(
    <div className="Card">
        <img className="image-card" src={profilepic} alt="profile picture"></img>
        <h2 className="card-title">  KESH  </h2>
        <p className="card-text">  I'm new Developer </p>
    </div>
);
}
export default Card