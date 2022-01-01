import { useState, useEffect } from "react";
import axios from "axios";
import mail from "../../assets/mail.svg";
import gmanSvg from "../../assets/growing-up-man.svg";
import gwomanSvg from "../../assets/growing-up-woman.svg";
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import map from "../../assets/map.svg";
import phonesvg from "../../assets/phone.svg";
import padlock from "../../assets/padlock.svg";
import "./CardStyles";
import Tables from "../table/Table";

import {
  Container,
  Icon,
  Image,
  Info,
  Cards,
  Buttondiv,
  Button,
} from "./CardStyles";

const Card = () => {
  const [user, setUser] = useState([]);
  const [titles, setTitles] = useState("");
  const [info, setInfo] = useState("");
  const [adduser, setAdduser] = useState([]);
  const {
    gender,
    email,
    phone,
    title,
    first,
    last,
    country,
    age,
    large,
    password,
  } = user;
  const dataUrl = "https://randomuser.me/api/";
  const userGet = async () => {
    const response = await axios.get(dataUrl);
    const userInfo = await response.data.results[0];
    const {
      name: { title, first, last },
      email,
      phone,
      gender,
      dob: { age },
      picture: { large },
      location: { country },
      login: { password },
    } = userInfo;
    setUser({
      first,
      last,
      large,
      gender,
      country,
      password,
      title,
      email,
      age,
      phone,
    });
    setTitles("My name is");
    setInfo(title + " " + first + " " + last);
  };
  useEffect(() => {
    userGet();
  }, []);
  console.log(user);

  return (
    <div>
      <Container>
        <Cards>
          <Image>
            <img src={large} alt="" />
          </Image>
          <Info>
            {titles}
            <span>{info}</span>
          </Info>
          <Icon>
            <img
              onMouseOver={() => {
                setTitles("Name:");
                setInfo(title + " " + first + " " + last);
              }}
              src={gender == "male" ? manSvg : womanSvg}
              alt=""
            />
            <img
              onMouseOver={() => {
                setTitles("Email:");
                setInfo(email);
              }}
              src={mail}
              alt=""
            />
            <img
              onMouseOver={() => {
                setTitles("Age:");
                setInfo(age);
              }}
              src={gender == "male" ? gmanSvg : gwomanSvg}
              alt=""
            />
            <img
              onMouseOver={() => {
                setTitles("Location:");
                setInfo(country);
              }}
              src={map}
              alt=""
            />
            <img
              onMouseOver={() => {
                setTitles("PhoneNumber:");
                setInfo(phone);
              }}
              src={phonesvg}
              alt=""
            />
            <img
              onMouseOver={() => {
                setTitles("Login:");
                setInfo(password);
              }}
              src={padlock}
              alt=""
            />
          </Icon>
          <Buttondiv>
            <Button onClick={() => userGet(!user)}>Random User Add</Button>
            <Button
              onClick={() => {
                adduser.includes(user)
                  ? alert("This user is on Table!!")
                  : setAdduser([...adduser, user]);
                setTitles("Name :");
                setInfo(title + " " + first + " " + last);
              }}
            >
              Add User To Table
            </Button>
          </Buttondiv>
          <Tables adduser={adduser} />
        </Cards>
      </Container>
    </div>
  );
};

export default Card;
