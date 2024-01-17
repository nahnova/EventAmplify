import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import React from "react";
import { useRoute } from "@react-navigation/native";

const QrScreen = () => {
  const { params } = useRoute();
  const { event, locationId } = params;
  return (
    <>
      {event && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Qr for {event.title}
          </Text>
          <QRCode
            size={300}
            value={JSON.stringify({
              locationId: locationId,
              eventId: event.id,
            })}
          />
        </View>
      )}
    </>
  );
};

export default QrScreen;
