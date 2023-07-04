import src from "../../assets/loading.gif";

export default function Loading() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <img src={src} style={style} alt="Loading" />
    </>
  );
}
