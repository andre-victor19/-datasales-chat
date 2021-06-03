import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Avatar,
  Slider,
  ButtonBase,
  Typography,
} from "@material-ui/core";
import { PlayArrowRounded, PauseRounded, Person } from "@material-ui/icons";
import MyDate from "../helpers/Date";

const _myDate = new MyDate();

function MessageAudio({ duration, audio, self = true }) {
  const player = useRef(null),
    [playAudio, setPlayAudio] = useState(false),
    [durationAudio, setDurationAudio] = useState(duration),
    [currentString, setCurrentString] = useState("0:00"),
    [currentAudio, setCurrentAudio] = useState(0);

  function _setDurationAudio(duration) {
    const tempDuration = duration === Infinity ? durationAudio : duration;
    setDurationAudio(tempDuration);
  }

  function _setCurrentAudio(current) {
    setCurrentAudio(current);
    const newCurrent = _myDate.duration(current);
    const stringCurrent = `${newCurrent.minutes}:${newCurrent.seconds}`;
    setCurrentString(stringCurrent);
  }

  function _playAudio() {
    player.current.play();
    setPlayAudio(true);
  }

  function _playPause() {
    player.current.pause();
    setPlayAudio(false);
  }

  return (
    <Grid
      style={{
        width: "20vw",
        display: "flex",
        alignItems: "flex-end",
        padding: "3px",
        paddingRight: "15px",
      }}
      container
      spacing={1}
    >
      <Grid item xs={3} style={{ display: self ? "initial" : "none" }}>
        <Avatar style={{ width: 55, height: 55 }}>
          <Person fontSize="large" />
        </Avatar>
      </Grid>
      <Grid item xs={2} style={{ placeSelf: "center" }}>
        <ButtonBase
          onClick={() => (Boolean(playAudio) ? _playPause() : _playAudio())}
          color="primary"
          size="small"
        >
          {Boolean(playAudio) ? (
            <PauseRounded fontSize="large" />
          ) : (
            <PlayArrowRounded fontSize="large" />
          )}
        </ButtonBase>
      </Grid>
      <Grid item xs={7}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Slider
            style={{ color: "#79886D" }}
            max={durationAudio}
            value={currentAudio}
            step={0.00000001}
            onChange={(e, value) => {
              player.current.currentTime = value;
            }}
          />
          <Box
            marginTop="5px"
            display="flex"
            justifyContent="space-between"
            width="100%"
            color="rgba(0, 0, 0, 0.45)"
          >
            <Typography style={{ fontSize: 11, paddingRight: "3px" }}>
              {currentString}
            </Typography>
            <Typography style={{ fontSize: 11, paddingRight: "3px" }}>
              {_myDate.getDate("HH:mm")}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        style={{ display: !self ? "flex" : "none", justifyContent: "flex-end" }}
      >
        <Avatar style={{ width: 55, height: 55 }}>
          <Person fontSize="large" />
        </Avatar>
      </Grid>
      <audio
        style={{ display: "none" }}
        ref={player}
        src={audio}
        onEnded={() => {
          setPlayAudio(false);
          setCurrentAudio(0);
        }}
        onDurationChange={({ currentTarget: { duration } }) =>
          _setDurationAudio(duration)
        }
        onTimeUpdate={({ currentTarget: { currentTime } }) =>
          _setCurrentAudio(currentTime)
        }
      />
    </Grid>
  );
}

MessageAudio.propTypes = {
  duration: PropTypes.number.isRequired,
  audio: PropTypes.string.isRequired,
  self: PropTypes.bool.isRequired,
};

export default MessageAudio;
