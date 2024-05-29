import { Html } from "@react-three/drei";
import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html center>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="rgb(255, 201, 121)"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Html>
  );
};

export default Loader;
