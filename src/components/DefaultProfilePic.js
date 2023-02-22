import profileImage from '../images/example.png'
function DefaultProfilePic({altText}) {
  return (
    <img src={profileImage} alt={altText ? altText : 'Profile Image'}/>
  )
}

export default DefaultProfilePic
