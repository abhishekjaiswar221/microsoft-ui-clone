import PropTypes from "prop-types";
// import { Component } from "react";

//Function Based Component
const BlueButton = (props) => {
  // props-->{btnText}
  return (
    <div>
      <button className="bg-[#0067b8] text-white font-semibold py-2 px-4 rounded-sm">
        {props.btnText}
        {/* btnText */}
      </button>
    </div>
  );
};
//Default Props
BlueButton.defaultProps = {
  btnText: "Microsoft Office",
};
//Prop Validation
BlueButton.propTypes = {
  btnText: PropTypes.string.isRequired,
};
export default BlueButton;

//Logic behind props object parameter passed to Button[Component]
// const props = {
//   btnText: "Learn more",
// };

// console.log(props.btnText);
// console.log("----------------------");
// const { btnText } = props;
// console.log(btnText);

//Class Based Component
// export default class BlueButton extends Component {
//  Default Props
//   static defaultProps = {
//     btnText: "Don't Learn More",
//   };
//  Prop Validation
//   static propTypes = {
//     btnText: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <div>
//         <button className="bg-[#0067b8] text-white font-semibold p-2 rounded-sm">
//           {this.props.btnText}
//           {/* btnText */}
//         </button>
//       </div>
//     );
//   }
// }
