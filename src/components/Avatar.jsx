import bunnyAvatar from "../Img/avatar-animations/bunnyFrame-1.png";
import chickenAvatar from "../Img/avatar-animations/chickenFrame-1.png";
import goatAvatar from "../Img/avatar-animations/goatFrame-1.png";
import catAvatar from "../Img/avatar-animations/catFrame-1.png";
import { useGetUser } from "../hooks/useGetUser";

export default function Avatar({ animation, h, smw, smh, selection }) {
  // selection is a prop that is passed in from the Profile.jsx file to determine which avatar to display on the profile page

  const { data: avatar } = useGetUser(); // get the user's avatar from the database using the useGetUser hook and store it in the avatar variable
  const userAvatar = avatar ? avatar.avatar_url : null; // if the avatar variable is not null, store the avatar_url in the userAvatar variable, otherwise store null in the userAvatar variable

  // let choice = selection? selection : "Bunny"; 
  let imageURL = bunnyAvatar; // set the default image to bunnyAvatar (this is the default avatar that is displayed when the user first signs up)
  switch (selection || userAvatar) {
    case "Bunny":
      imageURL = bunnyAvatar;
      break;
    case "Chicken":
      imageURL = chickenAvatar;
      break;
    case "Goat":
      imageURL = goatAvatar;
      break;
    case "Cat":
      imageURL = catAvatar;
      break;
    default:
      imageURL = bunnyAvatar;
  }

  const bounceAnimation = animation ? "animate-bounce" : ""; 
  return (
    <div className="flex justify-center items-center">
      {/* <img src={avatar} alt="avatar" className={`h-12 sm:h-20 sm:w-20 ${animation}`} /> */}
      <img
        src={imageURL}
        alt="avatar"
        className={`h-${h} sm:w-${smw} sm:h-${smh} ${bounceAnimation}`}
      />
    </div>
  );
}
