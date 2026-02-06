import Layout from "../layout/Layout";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../store/features/popup/popup.slice";
import { updateEmployee } from "../../store/features/employee/employee.thunk";

const Employees = () => {
  const employees = useSelector((s) => s.employee.employees);
  // console.log(employees)

  return (
    <Layout>
      <div className="space-y-4">
        {employees.map((details, index) => (
          <div 
            key={details.id} 
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <EmployeeCard details={details} />
          </div>
        ))}
        {employees.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-base-200 rounded-full mb-4">
              <svg className="w-10 h-10 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-base-content/60">No employees found!</p>
            <p className="text-sm text-base-content/40 mt-2">Click the + button to add your first employee</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

const EmployeeCard = ({ details }) => {
  // console.log(details)
  const dispatch = useDispatch();
  const handleHighlight = (details) => {
    console.log("kam chal raha he");
    dispatch(
      updateEmployee({
        id: details.id,
        details: {
          ...details,
          highlight: !details.highlight,
        },
      })
    );
  };
  return (
    <div className="employee-card bg-base-100 rounded-2xl shadow-md p-5 border border-base-300/50 hover:border-primary/30">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <img 
            className="relative size-16 rounded-2xl object-cover ring-2 ring-base-300 group-hover:ring-primary/50 transition-all" 
            src={details.profileUrl} 
            alt={details.name}
          />
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <div className="font-semibold text-lg text-base-content">{details.name}</div>
          <div className="text-sm font-medium text-primary/80 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {details.email}
          </div>
        </div>
        
        <div className="flex-1 min-w-[250px]">
          <p className="text-sm text-base-content/70 line-clamp-2">{details.bio}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(openEmployeePopup(details))}
            className="btn btn-sm btn-circle btn-ghost hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300 hover:scale-110"
            title="Edit"
          >
            <FiEdit3 className="text-lg" />
          </button>
          <button
            onClick={() => dispatch(openDeletePopup(details.id))}
            className="btn btn-sm btn-circle btn-ghost hover:bg-red-500/10 hover:text-red-600 transition-all duration-300 hover:scale-110"
            title="Delete"
          >
            <MdOutlineDelete className="text-xl" />
          </button>
          <button
            className={`btn btn-sm btn-circle btn-ghost transition-all duration-300 hover:scale-110 ${
              details.highlight 
                ? 'text-red-500 hover:bg-red-500/10' 
                : 'hover:bg-pink-500/10 hover:text-pink-600'
            }`}
            onClick={() => handleHighlight(details)}
            title={details.highlight ? "Remove from favorites" : "Add to favorites"}
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill={details.highlight ? "currentColor" : "none"}
                stroke="currentColor"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employees;
