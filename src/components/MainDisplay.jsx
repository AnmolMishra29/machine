import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Box,
  Divider,
  styled,
} from "@mui/material";
//import { red } from "@mui/material/colors";
//import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const WrapperCard = styled(CardActions)({
  display: "flex",
  justifyContent: "space-between",
});
const MainDisplay = () => {
  const percentage = 55;
  return (
    <div>
      <Card sx={{ maxWidth: 245 }}>
        <CardHeader
          //   avatar={
          //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //       R
          //     </Avatar>
          //   }
          //action={
          //<IconButton aria-label="settings">
          //<MoreVertIcon />
          // </IconButton>
          //}
          title="CNS 404"
          subheader="46s active"
          style={{ background: "#32CD32" }}
        />
        <Divider />
        <CardContent style={{ background: "#101D6B", margin: 0, padding: 0 }}>
          <Box style={{ margin: "0 14px 14px 14px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              //value={totalParts}
              //text={`${totalParts}`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `rgba(62, 152, 199, ${percentage * 100})`,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
                margin: 100,
              })}
            />
          </Box>
          <Divider />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              background: "#32CD32",
              width: "15.3em",
              //position: "absolute",
            }}
          >
            <Box>
              <Typography>Prepared parts</Typography>
              <Typography>58</Typography>
            </Box>
            <Box>
              <Typography>Total parts</Typography>
              <Typography>110</Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <WrapperCard>
          <Typography>6:00 am</Typography>
          <Typography>2:00 pm</Typography>
        </WrapperCard>
      </Card>
    </div>
  );
};

export default MainDisplay;
