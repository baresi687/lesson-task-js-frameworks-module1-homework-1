function ProfileName({name}) {
  return (
    <h4>{name ? name : 'Unknown user'}</h4>
  )
}

export default ProfileName
