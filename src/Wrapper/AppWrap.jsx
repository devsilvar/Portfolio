import { NavigationDots, SocialMedia } from "../Components";

const AppWrap = (Componenets, Idname, classNames) =>
  function HOC() {
    return (
      <div id={Idname} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Componenets />

          <div className="copyright">
            <p className="p-text">@Yusuf 2023</p>
            <p className="p-text">All Rights Reserved</p>
          </div>
        </div>

        <NavigationDots active={Idname} />
      </div>
    );
  };

export default AppWrap;
