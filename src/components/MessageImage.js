import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import MyDate from "../helpers/Date";

const _myDate = new MyDate();

function MessageImage({ image, caption, onClick }) {
  return (
    <Box maxWidth="20vw">
      <img
        onClick={onClick}
        style={{ maxWidth: "100%", borderRadius: "7.5px", cursor: "pointer" }}
        src={image}
        alt="goku"
      />
      {Boolean(caption) && (
        <Typography
          style={{
            color: "#303030",
            fontSize: 14.2,
            padding: "3px 4px 5px 6px",
          }}
        >
          {caption}
        </Typography>
      )}
      <Box
        display="flex"
        justifyContent="flex-end"
        width="100%"
        color="rgba(0, 0, 0, 0.45)"
      >
        <Typography style={{ fontSize: 11, paddingRight: "3px" }}>
          {_myDate.getDate("HH:mm")}
        </Typography>
      </Box>
    </Box>
  );
}

MessageImage.propTypes = {
  onClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

export default MessageImage;
