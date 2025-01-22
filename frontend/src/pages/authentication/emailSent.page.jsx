import React from "react";
import { Link } from "react-router-dom";
import { Image, Title, Text, Flex, Button } from "../../components/AntDesign";
import mailSent from "../../assets/mail-sent.svg";
import "./style.css";

export default class EmailSent extends React.Component {
  render() {
    return (
      <Flex className="email-sent-page-container" vertical align="center">
        <div>
          <Title level={3}>Email Sent Successfully</Title>
          <Text>Check your email!</Text>
        </div>
        <Image src={mailSent} style={{ margin: "20px 0" }} preview={false} />
        <Button type="primary">
          <Link to={"/"}>Back To Home Page</Link>
        </Button>
      </Flex>
    );
  }
}
