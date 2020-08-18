import React, { useState } from "react";
import { View, Text } from "./Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

export default function Calculator() {
  const [number, setNumber] = useState("");
  const [numbers, setNumbers] = useState([] as number[]);
  const [result, setResult] = useState("");
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Number: {number}
        </Text>
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Result: {result}
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "1")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                1
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "2")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                2
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "3")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "4")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                4
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "5")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                5
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "6")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                6
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "7")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                7
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "8")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                8
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "9")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                9
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => {
                numbers.push(parseInt(number));
                setNumber("");
              }}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => setNumber(number + "0")}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                0
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.digitContainer}>
            <TouchableOpacity
              onPress={() => {
                numbers.push(parseInt(number));
                setNumber("");
                setResult(numbers.reduce((x, y) => x + y, 0) + "");
                setNumbers([]);
              }}
              style={styles.digit}
            >
              <Text style={styles.digitText} lightColor={Colors.light.tint}>
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center"
  },
  digitContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center"
  },
  digit: {
    paddingVertical: 15
  },
  digitText: {
    textAlign: "center"
  }
});
