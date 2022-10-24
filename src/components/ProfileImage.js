function ProfileImage( {img} ) {
    return (
        <img
        src={ img.image }
        className="profile"
        alt="profile"
      />
    );
}

export default ProfileImage;