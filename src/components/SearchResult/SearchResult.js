import React,{useState} from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from "@material-ui/icons/Star";
function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [heart, setHeart] = useState(false)
console.log(heart)

  return (
    <div className="searchResult" onClick={()=>setHeart(!heart)}>
      <img src={img} alt="" />
      {heart ? <FavoriteIcon color="secondary" className="searchResult__heart"/> :< FavoriteBorderIcon className="searchResult__heart"/>}
      

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
