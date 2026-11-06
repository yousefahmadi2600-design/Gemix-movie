const GridItem = ({ icon, title, details }) => {
  return (
    <div className="flex gap-3 pb-4">
      <div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">{details}</p>
      </div>
    </div>
  );
};

export default GridItem;
