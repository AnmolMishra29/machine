import { AppBar, Toolbar, Button, Grid, Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import MqttLogo from "../../assets/mqttLogo.jpg";
import Modbusicon from "../../assets/modbusicon.png";
import Kafkaicon from "../../assets/kafkaicon.png";
import Databaseicon from "../../assets/databaseicon.png";
import Jmsicon from "../../assets/jmsicon.png";
import RabbitMQ from "../../assets/rabbitmqicon.svg";
import OPCUA from "../../assets/opcuaicon.png";
import WebSocket from "../../assets/websocketicon.png";
import Proficy from "../../assets/proficy.jpg";
import DataSource from "../../assets/datasource.png";
import FileShare from "../../assets/fileshareicon.jpg";
import Email from "../../assets/emailicon.png";
import Http from "../../assets/httpicon.avif";
import OPCDA from "../../assets/opcdaicon.png";
import Cron from "../../assets/cronicon.png";

const array = [
  { id: 1, name: "MQTT", image: MqttLogo },
  { id: 2, name: "HTTP", image: Http },
  { id: 3, name: "OPC UA", image: OPCUA },
  { id: 4, name: "OPC DA", image: OPCDA },
  { id: 5, name: "FILE SHARE", image: FileShare },
  { id: 6, name: "DATABASE", image: Databaseicon },
  { id: 7, name: "KAFKA", image: Kafkaicon },
  { id: 8, name: "DATA SOURCE", image: DataSource },
  { id: 9, name: "CRON", image: Cron },
  { id: 10, name: "EMAIL", image: Email },
  { id: 11, name: "JMS", image: Jmsicon },
  { id: 12, name: "MODBUS", image: Modbusicon },
  { id: 13, name: "PROFICY", image: Proficy },
  { id: 14, name: "RABBIT MQ", image: RabbitMQ },
  { id: 15, name: "WEB SOCKET", image: WebSocket },
];
const DataAquisation = () => {
  const navigate = useNavigate();
  //const currDate = new Date().toLocaleDateString();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained">Create</Button>
        </Toolbar>
      </AppBar>
      <Box
        style={{
          margin: 20,
        }}
      >
        <Grid
          container
          spacing={2}
          //columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {array.map((ar) => {
            return (
              <Grid item md={2.4}>
                <div class="card">
                  <div class="card_image">
                    <img src={ar.image} alt="logo" style={{ width: "90px" }} />
                  </div>
                  <h3 class="card__title">{ar.name}</h3>
                  {/* <div class="card__date">{currDate}</div> */}
                  <div class="card__arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="15"
                      width="15"
                      onClick={() => {
                        ar.id === 1
                          ? navigate("/")
                          : ar.id === 2
                          ? navigate("/")
                          : ar.id === 3
                          ? navigate("/")
                          : ar.id === 4
                          ? navigate("/")
                          : ar.id === 5
                          ? navigate("/fileshare")
                          : ar.id === 6
                          ? navigate("/database")
                          : ar.id === 7
                          ? navigate("/")
                          : ar.id === 8
                          ? navigate("/")
                          : ar.id === 9
                          ? navigate("/cron")
                          : ar.id === 10
                          ? navigate("/email")
                          : ar.id === 11
                          ? navigate("/")
                          : ar.id === 12
                          ? navigate("/")
                          : ar.id === 13
                          ? navigate("/proficy")
                          : ar.id === 14
                          ? navigate("/rabbitmq")
                          : navigate("/");
                      }}
                    >
                      <path
                        fill="#fff"
                        d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default DataAquisation;
