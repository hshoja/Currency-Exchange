import React from "react";
import { Box, Typography } from "@material-ui/core";

const PageTitle = ({ title, description }) => {
  return (
    <Box pt={7} pb={7}>
      <Typography variant="h5" component={"h5"}>
        {title}
      </Typography>
      {description && (
        <Typography variant="caption" color="textSecondary">
          {description}
        </Typography>
      )}
    </Box>
  );
};      

export default PageTitle;
