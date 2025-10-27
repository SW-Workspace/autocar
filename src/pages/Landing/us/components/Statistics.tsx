import statsData from "../data/statsData";

export default function Statistics() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full md:h-80 bg-neutral-100 items-center justify-center px-10 py-12">
        {statsData.map((data) => (
          <div className="bg-white flex flex-col items-center justify-center text-blue-900 py-8 px-5 w-auto h-40 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-2">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <data.icon className="w-6 h-6" />
              </span>
            </div>
            <h2 className="text-2xl font-bold">{data.stat}</h2>
            <p className="text-gray-600">{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

