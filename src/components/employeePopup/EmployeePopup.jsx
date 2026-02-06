import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popup.slice";
import { useEffect, useState } from "react";
import { postEmployees, updateEmployee } from "../../store/features/employee/employee.thunk";

const EmployeePopup = () => {
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
  });
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.employeePopup);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
    // console.log(formDetails)
  };
  const handleSubmit = async () => {
    if(popup.id){
      await dispatch(updateEmployee({
        id: popup.id,
        details: formDetails
      }))
    } else{
        await dispatch(postEmployees(formDetails))
    }
    dispatch(closeEmployeePopup());
  };

  useEffect(() => {
    if (!popup) {
      setFormDetails({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        highlight: false,
      });
    }
    else if (popup.id) {
      setFormDetails({
        profileUrl: popup.profileUrl,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        highlight: false,
      });
    }
  }, [popup]);

  if (!popup) return null;
  //   console.log('error')
  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm justify-center items-center flex z-20 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-base-100 rounded-3xl w-full max-w-md mx-4 shadow-2xl animate-slideIn overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {popup.id ? 'Edit Employee' : 'Add Employee'}
          </h2>
          <p className="text-white/80 text-sm mt-1">Fill in the details below</p>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Profile URL
              </span>
            </label>
            <input
              name="profileUrl"
              onChange={handleInputChange}
              value={formDetails.profileUrl}
              type="text"
              className="input input-bordered w-full focus:input-primary transition-all"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Name
              </span>
            </label>
            <input
              name="name"
              value={formDetails.name}
              onChange={handleInputChange}
              type="text"
              className="input input-bordered w-full focus:input-primary transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </span>
            </label>
            <input
              name="email"
              value={formDetails.email}
              onChange={handleInputChange}
              type="email"
              className="input input-bordered w-full focus:input-primary transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Bio
              </span>
            </label>
            <textarea
              placeholder="Tell us about this employee..."
              className="textarea textarea-bordered w-full h-24 focus:textarea-primary transition-all resize-none"
              name="bio"
              value={formDetails.bio}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              onClick={handleSubmit} 
              className="btn btn-primary flex-1 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {popup.id ? 'Update' : 'Submit'}
            </button>
            <button 
              onClick={() => dispatch(closeEmployeePopup())}
              className="btn btn-ghost flex-1 hover:bg-base-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePopup;
