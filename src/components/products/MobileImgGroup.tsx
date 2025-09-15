interface Prop {
  imgs: string[];
}
const MobileImgGroup = ({ imgs }: Prop) => {
  return (
    <div className="mobile-group">
      <div className="mobile-ss-group">
        {imgs.map((each, index) => (
          <img src={each} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};

export default MobileImgGroup;
