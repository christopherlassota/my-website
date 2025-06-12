import "./profile.scss";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__picture"></div>
      <h1 className="profile__name">Christopher Lassota</h1>
      <ul className="profile__link-list">
        <li className="profile__link">
          <div className="profile__icon"></div>
          <p className="profile__link-type">EMAIL</p>
          <p className="profile__link-info">christopherlassota@outlook.com</p>
        </li>
        <li className="profile__link">
          <div className="profile__icon"></div>
          <p className="profile__link-type">PHONE</p>
          <p className="profile__link-info">(403) 966-1598</p>
        </li>
      </ul>
      <ul className="profile__quick-link-list">
        <li className="profile__quick-link">
          <div className="profile__quick-icon"></div>
        </li>
        <li className="profile__quick-link">
          <div className="profile__quick-icon"></div>
        </li>
        <li className="profile__quick-link">
          <div className="profile__quick-icon"></div>
        </li>
        <li className="profile__quick-link">
          <div className="profile__quick-icon"></div>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
