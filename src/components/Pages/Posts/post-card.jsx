import "./post-page.css";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

export default function PostCard({
  data: {
    id,
    theme,
    content,
    creator: { username },
  },
}) {
  let navigate = useNavigate();
  const handlePostRedirect = () => navigate(`/post/${id}`);

  return (
    <Card className="post-card" variant="outlined">
      <CardContent
        sx={{ height: "100%", backgroundColor: "rgb(190, 190, 190)" }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Creator: {username}
        </Typography>
        <Typography variant="h5" component="div">
          Post Theme:
        </Typography>
        <Typography variant="h6" component="div">
          {theme.length > 15 ? theme.slice(0, 12) + "..." : theme}
        </Typography>
        <div style={{ height: "100px" }}>
          <Typography variant="h5" component="div">
            Post Content:
          </Typography>
          <Typography
            component="div"
            variant="h6"
            sx={{ height: "75%", wordWrap: "break-word", overflow: "hidden" }}
          >
            {content.length > 65 ? content.slice(0, 65) + "..." : content}
          </Typography>
        </div>
        <CardActions>
          <Button
            id="detailsButton"
            onClick={handlePostRedirect}
            size="small"
            color="secondary"
          >
            Details
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
