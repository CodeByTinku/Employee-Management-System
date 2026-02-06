import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../../store/features/popup/popup.slice";
import { deleteEmployee } from "../../store/features/employee/employee.thunk";

function DeletePopup() {
  const dispatch = useDispatch();
  const popup = useSelector(state => state.popup.deletePopup);
  const handleConfirmation = async() => {
    await dispatch(deleteEmployee(popup));
    dispatch(closeDeletePopup());
  }
  if(!popup) return null;
  return (
    <div 
      onClick={()=>dispatch(closeDeletePopup())} 
      className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm justify-center items-center flex z-20 animate-fadeIn"
    >
      <div 
        onClick={(e)=>e.stopPropagation()} 
        className="bg-base-100 rounded-3xl shadow-2xl max-w-md mx-4 overflow-hidden animate-slideIn"
      >
        <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Delete Employee</h2>
              <p className="text-white/80 text-sm">This action cannot be undone</p>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-base-content/80 mb-6">
            Are you sure you want to delete this employee? All associated data will be permanently removed from the system.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={handleConfirmation} 
              className="btn bg-red-500 hover:bg-red-600 text-white border-none flex-1 shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Yes, Delete
            </button>
            <button 
              onClick={()=>dispatch(closeDeletePopup())} 
              className="btn btn-ghost flex-1 hover:bg-base-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
