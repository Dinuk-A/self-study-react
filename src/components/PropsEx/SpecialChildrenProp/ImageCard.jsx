import MainCard from "./CardTempMain";
import userPic from "../../../assets/images/user.png"
// import userPic from "@/assets/images/user.png"

const ImageCard =()=>{
    return(
        <MainCard>
            <img src={userPic} alt="" className="h-10 mx-auto"/>
            <p className="bg-slate-600">This is a card with an image and a caption below it.</p>
        </MainCard>
    )
}

export default ImageCard;