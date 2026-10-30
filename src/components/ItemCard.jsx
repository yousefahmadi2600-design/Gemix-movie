const ItemCard = ({ item }) => {
  return (
    <div className="group h-80 rounded-xl p-2 my-4 hover:cursor-pointer">
      <div className="group-hover:shadow-primary overflow-hidden border-primary h-5/6 w-full rounded-xl shadow-2xl transition-all duration-400 group-hover:border">
        <img src={item.img} className="h-full w-full group-hover:scale-110 transition-all duration-200" />
      </div>

      <div className="pt-2">
        <h2 className="text-[15px] font-semibold text-gray-950 line-clamp-1">
          {item.title}
        </h2>
        <h2 className="text-sm font-semibold text-gray-600">
          {item.gen}&nbsp;&middot;&nbsp;2018
        </h2>
      </div>
    </div>
  );
};

export default ItemCard;
