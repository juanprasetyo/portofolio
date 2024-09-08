export default function Card() {
  return (
    <div className="flex w-1/3 scale-[.8] flex-col items-center rounded-xl bg-white p-5 duration-500 ease-in-out hover:scale-100">
      <div className="h-[200px] w-full animate-pulse rounded-xl bg-gray-300"></div>
      <div className="mt-3 h-[25px] w-1/2 animate-pulse self-start rounded-md bg-gray-300"></div>
    </div>
  );
}
