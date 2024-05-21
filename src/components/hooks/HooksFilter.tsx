import { Button, Grid, Typography } from "@mui/material";
import { populatedHooks } from "../../interfaces/HookInterface";

const HooksFilter = () => {
  const options = populatedHooks;

  const handleButtonClick = (key: any) => {
    window.location.href = `/hook/${key}`;
  };

  return (
    <>
      <Grid
        sx={{
          width: "250px",
          background: "white",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Grid
          sx={{
            height: "40px",
            width: "100%",
            borderColor: "black",
            border: 1,
            marginBottom: "10px",
            paddingLeft: "10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            color: "white",
            backgroundColor: "#264653",
          }}
        >
          <Typography sx={{ fontSize: "24px" }}>
            <b>Hooks</b>
          </Typography>
        </Grid>

        <Grid
          sx={{
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {options.map((option: any, index: any) => (
            <Button
              key={index}
              value={option.title}
              sx={{
                textTransform: "none",
                justifyContent: "flex-start",
                paddingLeft: "20px",
              }}
              onClick={() => handleButtonClick(option.id)}
            >
              <Typography sx={{ color: "#264653", fontSize: "20px" }}>
                {option.title}
              </Typography>
            </Button>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default HooksFilter;
