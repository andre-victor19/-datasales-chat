import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@material-ui/core";
import { GetAppRounded } from "@material-ui/icons";
import MyDate from "../helpers/Date";

// Icons
import ExcelIcon from "../assets/icons/excel.svg";
import WordIcon from "../assets/icons/word.svg";
import PowerPointIcon from "../assets/icons/powerpoint.svg";
import FileIcon from "../assets/icons/file.svg";
import PdfIcon from "../assets/icons/pdf.svg";

const _myDate = new MyDate();

function MessageFile({ file, extension, onClick }) {
  return (
    <Box
      width="20vw"
      display="flex"
      alignItems="flex-end"
      flexDirection="column"
      padding="3px"
    >
      <Grid container>
        <Grid item xs={12}>
          <Box
            style={{ cursor: "pointer" }}
            display="flex"
            alignItems="center"
            bgcolor="#cfe9ba"
            borderRadius="5px"
            padding="13px 19px"
            justifyContent="flex-start"
            onClick={onClick}
          >
            <img src={PdfIcon} alt={extension} width="35px" />
            <Typography
              noWrap
              style={{ fontSize: 14.2, flexGrow: 1, margin: "0 10px" }}
            >
              André.xlsx
            </Typography>
            <GetAppRounded />
          </Box>
        </Grid>
      </Grid>
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

MessageFile.propTypes = {
  file: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MessageFile;
