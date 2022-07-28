import React from "react";
import "./Home.css";
import ShareIcon from '@mui/icons-material/Share';
import NfcIcon from '@mui/icons-material/Nfc';
import CompareIcon from '@mui/icons-material/Compare';

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src="/asserts/icons/books.svg" />
      </div>
      <div className="text-container">
        <img className={"linkat"} src={"/asserts/icons/linkat-14.svg"} />
        <h2>Save your links in one place</h2>
        <br />
        <p>
          instead of having many links to all your social media accounts, you
          can now have one link to all of your account!
        </p>
        <div className="features">
            <div className="feature instant">
                <ShareIcon mt="1em"/>
                <div className="description">
                    <label>instant</label>
                    <label>share your info with a tap or scan</label>
                </div>
            </div>
            <div className=" feature easy">
                <NfcIcon mt="2em"/>
                <div className="description">   
                    <label>easy</label>
                    <label>others don't need an app</label>
                </div>
            </div>
            <div className=" feature compatiable">
                <CompareIcon mt="1em"/>
                <div className="description">   
                    <label>compatiable</label>
                    <label>Works on iPhone and Android</label>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;