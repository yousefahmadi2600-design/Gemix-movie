const ItemCard = ({ item }) => {
  return (
    <div className="h-90 rounded-xl p-2 hover:cursor-pointer">
      <img src={item.img} className="h-3/4 w-full rounded-xl hover:shadow-primary shadow-2xl hover:border border-primary transition-all duration-400 border-solid" />
      <div className="pt-2">
        <h2 className="text-[15px] font-semibold text-gray-950">{item.title}</h2>
        <h2 className="text-sm font-semibold text-gray-600">
          {item.gen}&nbsp;&middot;&nbsp;2018
        </h2>
      </div>
    </div>
  );
};

export default ItemCard;
