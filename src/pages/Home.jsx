import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "#FFF4EA",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <Container sx={{ py: 10 }}>
        <Typography variant="h3">Places You Visit</Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <Card sx={{ backgroundColor: "#b89f89" }}>
              <CardMedia
                sx={{ height: 140, }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="this is coffee"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop Name
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  content??
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ backgroundColor: "#795548" }}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <Card sx={{ backgroundColor: "#b89f89" }}>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="this is coffee"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop Name
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  content??
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ backgroundColor: "#795548" }}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <Card sx={{ backgroundColor: "#b89f89" }}>
              <CardMedia
                sx={{ height: 140}}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="this is coffee"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shop Name
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  content??
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ backgroundColor: "#795548" }}>
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
