import React, { useState } from 'react';
import { Button } from 'primereact/button';
import cursor from "../assets/cursor.png";
import Avatar from "react-avatar-edit";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import picture from '../assets/profile.png';

const SideBar = () => {

  const [side, setSide] = useState(true);
  const [profile, setProfile] = useState("");
  const [ajustimage, setAjustimage] = useState(false);
  const [src, setsrc] = useState(false);
  const [preview, setpreview] = useState(false);
  const [photo, setphoto] = useState([]);

  const photoFinal = photo.map((item) => item.preview);

  const onClose = () => {
    setpreview(null);
  };
  const onAjust = (view) => {
    setpreview(view)
  };

  const saveAjustPhoto = () => {
    setphoto([...photo, { preview }]);
    setAjustimage(false);
  };

  return (
    <>
     <div className={`${side ? "w-60" : "w-12"} duration-300 h-screen p-3 pt-8 bg-dark-one relative`}>
      <img id="pic"
        src={cursor} alt="img"
        className={`absolute cursor-pointer -right-3 rounded-full
        top-9 w-7 border-8 border-dark-one ${!side && "rotate-180"}`}
          onClick={() => setSide(!side)}
        />
        <div>
          <div className="text-center p-4">
            <div className="flex flex-col text-center pt-4 justify-center align-center">
              <div id="img-false" className={`${!side && "invisible"}`}>
                <img
                style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "auto",
                border: "2px solid #3692ee",
                }}
                onClick={() => setAjustimage(true)}
                src={photoFinal.length ? photoFinal : picture} 
                alt="profile pic" />
                <label htmlFor="" className="mt-3 font-medium text-2xl">Roland Mweze</label>

                <Dialog
                  visible={ajustimage}
                  header={()=>{
                    <p htmlFor="" className="font-medium">Update Profile</p>
                  }}
                  onHide={() => setAjustimage(false)}
                >

                <div className="confirmation-content pt-8 flex flex-col items-center">
                  <div className="popup">
                    <h1 className='title'>Update Profile</h1>
                    <h2 className="cursor-pointer close-btn" onClick={() => setAjustimage(false)} >X</h2>
                  </div>
                  <div className="avatar">
                    <Avatar
                      width={300}
                      height={400}
                      onCrop={onAjust}
                      onClose={onClose}
                      src={src}
                      shadingColor={"#474649"}
                      backgroundColor={"#474649"}
                    />
                  </div>
                  <div className="flex justify-around w-12 mt-4">
                    <Button
                      onClick={saveAjustPhoto}
                      label="Save"
                      className="bg-blue-one px-4 py-1 m-2 rounded text-white"
                    />
                  </div>
                </div>
                </Dialog>
                <InputText type="file" 
                  accept="image/"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if(file && file.type.substring(0,5) === "image"){
                    setProfile(profile);
                    }else {
                    setProfile(null);
                    }
                  }}
                />
             </div>
           </div>
         </div>
          <div id="false-one" className={`${!side && "true-one flex flex-col"}`}>
            <span><i className="fab fa-github-square"></i></span>
            <span><i className="fab fa-linkedin"></i></span>
            <span><i className="fab fa-twitter-square"></i></span>
          </div>
       </div>
      </div>
    </>
  );
}

export default SideBar;