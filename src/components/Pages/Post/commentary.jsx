import "./post-page.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function Commentary({
  data: {
    commentary,
    creator: { username },
  },
}) {
  return (
    <Card
      style={{
        display: "flex",
        alignItems: "center",
        margin: "0 20px 20px",
        maxWidth: "90vw",
        boxShadow: "5px 5px 5px black",
        backgroundColor: "rgb(190, 190, 190)",
      }}
      variant="outlined"
    >
      <CardContent
        sx={{
          height: "100%",
          boxSizing: "border-box",
          wordWrap: "break-word",
          width: "100%",
        }}
      >
        <AccountCircleIcon fontSize="large" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {username} commented :
        </Typography>
        <Typography
          className="commentary"
          variant="h5"
          component="div"
          style={{
            wordWrap: "break-word",
            width: "100%",
          }}
        >
          {commentary}
        </Typography>
      </CardContent>
    </Card>
  );
}
