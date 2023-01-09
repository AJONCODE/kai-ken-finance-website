const ListInfo = ({ title, value, valTextSize }) => {
  return (
    <div className="flex flex-row justify-between pt-1">
      <div className="pl-4">
        <div className="font-Poppins font-regular text-sm text-wordings-white">{title}</div>
      </div>
      <div className=" pr-4">
        <div className="font-Poppins font-extrabold text-sm text-[#5DF487]">{value}</div>
      </div>
    </div>
  );
};

export default ListInfo;
