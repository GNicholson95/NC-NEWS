import loaderImage from '../Assets/Loader.svg';

const Loader = () => {
    return( 
        <div className="loader" id="loader">
      <img src={loaderImage} alt="loading" />
    </div>
     )
 }
 
 export default Loader