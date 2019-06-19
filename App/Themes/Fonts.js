import Colors from "./Colors";
import Metrics from "./Metrics";

const type = {
  base: "GothamRounded-Light",
  bold: "Gotham-Bold",
  emphasis: "GothamRounded-Medium"
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
};

// const style = {
//   textCategory: {
//     fontFamily: type.bold,
//     color: Colors.dark,
//     fontSize: 25,
//     textAlignVertical: "center",
//     textAlign: "center"
//   },
//   textSlideLightSmall: {
//     fontFamily: type.base,
//     color: "#fff",
//     fontSize: 15,
//     textAlignVertical: "center",
//     textAlign: "center"
//   },
//   textSlideLightSmallSemiBold: {
//     fontFamily: type.base,
//     color: "#fff",
//     fontSize: size.small,
//     textAlignVertical: "center",
//     textAlign: "center", fontWeight:"500"
//   },
//   textSlideLight: {
//     fontFamily: type.base,
//     color: Colors.Snow,
//     fontSize: 20,
//     textAlignVertical: "center",
//     textAlign: "center"
//   },
//   textSlideBoldSmall: {
//     fontFamily: type.bold,
//     color: "#fff",
//     fontSize: 15,
//     textAlignVertical: "center",
//     textAlign: "center"
//   },

//   textInputContainer: {
//     height: 40,
//     width: Metrics.screenWidth * 0.8,
//     alignSelf: "center",
//     marginVertical: 10
//   },

//   textInput: {
//     fontFamily: type.bold,
//     color: "#fff",
//     height: 38,
//     fontSize: size.TextInput,
//     textAlignVertical: "center",
//     //textAlign: "center",
//     textAlign: "left"
//   },

//   underlineText: {
//     fontFamily: type.bold,
//     color: "#fff",
//     fontSize: size.small,
//     textAlignVertical: "center",
//     textAlign: "left",
//     textDecorationLine: "underline"
//   },
//   errorServerTxt: {
//     width: Metrics.screenWidth * 0.8,
//     alignSelf: "center",
//     marginVertical: 10,
//     fontSize: size.small,
//     textAlign: "center"
//   }
// };

export default {
  type,
  size,
};
