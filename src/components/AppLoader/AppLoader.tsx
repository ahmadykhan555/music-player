import "./AppLoader.scss";
import logo from "../../assets/images/logo.svg";

interface AppLoaderProps {
  loaderText?: string;
}

const AppLoader: React.FC<AppLoaderProps> = ({ loaderText }) => {
  return (
    <div className='app-loader-component'>
      <div className='app-loader-component__content'>
        <p>{loaderText || "Loading, Buckle Up!"}</p>
        <img src={logo}></img>
      </div>
    </div>
  );
};

export default AppLoader;
