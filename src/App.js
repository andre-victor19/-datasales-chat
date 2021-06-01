import React from "react";
import { Container } from "@material-ui/core";
import {
  Message,
  MessageAudio,
  MessageImage,
  MessageVideo,
  MessageText,
  MessageFile,
} from "./components";

function App() {
  return (
    <Container maxWidth="sm">
      <Message self={false}>
        <MessageImage image="https://files-whatsapp.s3.amazonaws.com/image/396/1596475853511-floresConvite.png" />
      </Message>
      <Message>
        <MessageImage
          caption="Legendaasdfsfsdfkjnksdfçkjsdhglkjsdhfgkjlsdhfgjkhsdlkfjhgskjdhflgkjsdhfgjhsdklfghkla"
          image="https://files-whatsapp.s3.amazonaws.com/image/396/1596475853511-floresConvite.png"
        />
      </Message>
      <Message self={false}>
        <MessageText text={`Olá amigo\n\nT\n\nudo bem ?`} />
      </Message>
      <Message self={false}>
        <MessageVideo
          caption="Legendaaa 2"
          video="https://files-whatsapp.s3.amazonaws.com/video/396/1594073136000-BackgroundBiblia.mp4"
        />
      </Message>
      <Message>
        <MessageVideo video="https://files-whatsapp.s3.amazonaws.com/video/396/1594073136000-BackgroundBiblia.mp4" />
      </Message>
      <Message>
        <MessageAudio
          self
          duration={5.581}
          audio="https://files-whatsapp.s3.amazonaws.com/audio/396/1621262890044.ogg"
        />
      </Message>
      <Message self={false}>
        <MessageAudio
          self={false}
          duration={5.581}
          audio="https://files-whatsapp.s3.amazonaws.com/audio/396/1621262890044.ogg"
        />
      </Message>
      <Message>
        <MessageFile />
      </Message>
    </Container>
  );
}

export default App;
