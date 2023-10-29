
const Modal = ({title, url, handleClose}) => {

  return (
    <div className="modal-backdrop">

        <div className="modal">

            <div className="modal-body">
               <div className='modal-title'>{title}</div>
               <div className='modal-url'>{url}</div>
               <div className="skills">
               {/* <ul>
                    {skills.map(skill => <li key={skill}>{skill}</li>)}
               </ul> */}
               </div>
            </div>
            <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>

    </div>
  );
};

export default Modal;