import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flexGrow={1} display="flex" alignItems="center" justifyContent="center" bgcolor="#f9f9f9">
        <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h3" gutterBottom>
            Bem-vindo
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Sistema gerenciamento de usuários.
          </Typography>

          <Grid container spacing={4} mt={4} justifyContent="center">
            <Grid>
              <PersonIcon sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" mt={2}>Gestão de Usuários</Typography>
              <Typography variant="body2" color="text.secondary">
                
              </Typography>
            </Grid>
            <Grid>
              <CodeIcon sx={{ fontSize: 50, color: "secondary.main" }} />
              <Typography variant="h6" mt={2}>Tecnologias Modernas</Typography>
              <Typography variant="body2" color="text.secondary">
                
              </Typography>
            </Grid>
            <Grid>
              <DevicesIcon sx={{ fontSize: 50, color: "success.main" }} />
              <Typography variant="h6" mt={2}>Responsivo</Typography>
              <Typography variant="body2" color="text.secondary">
                
              </Typography>
            </Grid>
          </Grid>

          <Box mt={6}>
            <Button variant="contained" size="large" onClick={() => navigate("/usuarios")}>Acessar Lista de Usuários</Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}