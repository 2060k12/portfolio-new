interface Prop {
  imgs: string[];
  title: string;
}
const MobileImgGroup = ({ imgs, title }: Prop) => {
  return (
    <div className="mobile-group">
      <div className="mobile-ss-group">
        {imgs.map((each) => (
          <img src={each} alt="" />
        ))}
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default MobileImgGroup;
