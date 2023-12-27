import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const TidioChat = () => {
  // Define the HTML content with the Tidio script
  const tidioChatHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tidio Chat</title>
        <!-- Add any additional meta tags or stylesheets here -->
      </head>
      <body>
        <!-- Place the Tidio chat widget script here -->
        <script src="https://code.tidio.co/bfjzlkwlnq0dh3y8viyd6ijhvsfauzai.js" async></script>
      </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ html: tidioChatHtml }} />
    </View>
  );
};

export default TidioChat;
