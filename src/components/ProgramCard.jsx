
const ProgramCard = ({
  programType,
  programName,
  tuitionFee,
  applicationFee,
  duration,
  appCode,
  location,
}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-orange">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{programType}</div>
        <div className="text-gray-700 text-base mb-2">{programName}</div>

        <div className="bg-secondary p-4 rounded-t-lg">
        <div className="text-gray-700 text-base">
          <span className="font-semibold ">Gross Tuition Fee:</span> <span className="text-black font-bold">${tuitionFee} CAD/Yr</span> 
        </div>
        <div className="text-gray-700 text-base">
          <span className="font-semibold">Application Fee:</span> <span className="text-black font-bold">${applicationFee} CAD</span> 
        </div>
        <div className="text-gray-700 text-base">
          <span className="font-semibold">Duration:</span> {duration}
        </div>
        <div className="text-gray-700 text-base">
          <span className="font-semibold">App Code:</span> {appCode}
        </div>
        <div className="text-gray-700 text-base">
          <span className="font-semibold">Location:</span> {location}
        </div>
        <button className='w-full py-2 px-1.5 bg-primary mt-3 font-semibold text-secondary rounded-lg'>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
