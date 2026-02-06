import Layout from "../layout/Layout";
import { FaPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../../store/features/popup/popup.slice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 sticky top-0 z-10 shadow-lg">
      <Layout>
        <div className="navbar">
          <div className="navbar-start">
            <a className="text-white text-2xl font-bold tracking-tight flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              Employees
            </a>
          </div>
          <div className="navbar-end gap-2">
            <button
              onClick={()=>dispatch(openEmployeePopup())}
              className="btn btn-circle bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110"
              title="Add Employee"
            >
              <FaPlus className="text-lg" />
            </button>
            <button className="btn btn-circle bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white transition-all duration-300 hover:scale-110">
              <div className="indicator">
                <FaHeart className="text-lg" />
              </div>
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
