import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Grid } from '@mui/material';  // Correct import for Grid

// Import images
import birdImage from "../assets/bird.jpg";

const FeatureContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: "linear-gradient(to bottom, #1e3c72, #2a5298)",
  color: "#fff",
  textAlign: "center",
}));

const ZoomCard = styled(Card)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: theme.spacing(2),
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
  },
}));

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <FeatureContainer id="features">
      {/* Section Title */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", letterSpacing: "2px" }}>
        🚀 Stunning Features
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 4 }}>
        Experience the pinnacle of modern design and animation with our unique features.
      </Typography>

      {/* Animated Photo Cards */}
      <Grid container spacing={4} sx={{ mb: 6 }}> {/* Replaced Grid2 with Grid */}
        {[{
          id: 1,
          image: birdImage,
          title: "Feature One",
          description: "Amazing interactive design.",
        },
        {
          id: 2,
          image: birdImage,
          title: "Feature Two",
          description: "Stunning UI and UX.",
        },
        {
          id: 3,
          image: birdImage,
          title: "Feature Three",
          description: "Cutting-edge animations.",
        }].map((feature) => (
          <Grid item xs={12} sm={6} md={4} key={feature.id}> {/* Replaced Grid2 with Grid */}
            <ZoomCard>
              <CardMedia component="img" height="200" image={feature.image} alt={feature.title} />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </CardContent>
            </ZoomCard>
          </Grid>
        ))}
      </Grid>

      {/* Timeline Section */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 4 }}>
        🗓 Our Roadmap
      </Typography>
      <Timeline position="alternate">
        {[{
          id: 1,
          title: "Concept & Planning",
          date: "Q1 2024",
          color: "primary",
        },
        {
          id: 2,
          title: "Design & Prototyping",
          date: "Q2 2024",
          color: "secondary",
        },
        {
          id: 3,
          title: "Development Phase",
          date: "Q3 2024",
          color: "success",
        },
        {
          id: 4,
          title: "Launch & Support",
          date: "Q4 2024",
          color: "warning",
        }].map((step) => (
          <TimelineItem key={step.id}>
            <TimelineSeparator>
              <TimelineDot color={step.color} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {step.title}
              </Typography>
              <Typography variant="body2">{step.date}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Interactive Animation */}
      
    </FeatureContainer>
  );
};

export default Features;
