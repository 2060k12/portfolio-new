interface Prop {
  img: string;
}
const DesktopImg = ({ img }: Prop) => {
  return (
    <div className="desktok-ss">
      <img src={img} alt="" />
    </div>
  );
};

export default DesktopImg;
