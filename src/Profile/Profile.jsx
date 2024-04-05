import './Profile.css'
// eslint-disable-next-line react/prop-types
const Profile = ({image, name, location, role}) => {
 return(
  <>
  <img className="image" src={image} alt={""} />
  <h1>{name}</h1>
  <p className='location'>{location}</p>
  <p className='role'>{role}</p>
  </>
 )
}

export default Profile
