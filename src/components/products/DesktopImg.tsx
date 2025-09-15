interface Prop {
  img: string;
  title: string;
}
const DesktopImg = ({ img, title }: Prop) => {
  return (
    <div className="desktok-ss">
      <img src={img} alt="" />
      <h4>{title}</h4>
    </div>
  );
};

export default DesktopImg;
