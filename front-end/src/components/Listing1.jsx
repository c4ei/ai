import "./../assets/styles/components/Listing.css";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Listing1 = ({ items }) => {
  // console.log(JSON.stringify("items:"+items));
  return (
    <div className="item-container-card">
      {items.map((item, i) => {

        let _img_url = "";
        let _img_link = "";
        let _img_name = "";
        try{
          // console.log(item.uri);
          _img_url = item.uri;
          if(item.path===undefined){
            _img_link = "#";
          } else {
            if(item.id===undefined){
              _img_link = "#";
            }else{
              _img_link = "/"+item.path+"/"+item.id;
            }
          }
          _img_name = item.name;
        }catch(e){
          _img_url = "https://i.ibb.co/FnX6Xjz/noimg.jpg";
          _img_link = "#";
          _img_name = "empty";
        }

        return (
          <div className="card-column" key={i}>
            <div className="item-card">
              <img src={_img_url} alt=""  />
              <div className="item-card-bottom-1">
                {/* <a href={`/${item.path}/${item.id}`}> */}
                <a href={`${_img_link}`}>
                  <h3 className="card-title">{_img_name}</h3>
                </a>
                <p>
                  {" "}
                  <AiFillHeart /> {92}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing1;
