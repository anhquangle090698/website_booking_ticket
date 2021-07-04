import React from 'react'

function Popup() {
    // let { popup } = useSelector(state => state.StateManageLogic);
    // let dispatch = useDispatch();
    // ${popup.active}

    return (
        <>
            <div className={`popup`}  onClick={() => {
                // dispatch(handleLogicPopupCloseAction());
            }}>
                <div className="popup-content">
                    <div className="popup-content__close" onClick={() => {
                        // dispatch(handleLogicPopupCloseAction());
                    }}>
                        <i className="fa fa-times popup-content__icon"></i>
                    </div>
                    <iframe className="popup-content__frame" width="900" height="600" src="https://youtube.com/embed/uqAVt13jlr0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </div>
            </div>   
        </>
    )
}

export default Popup;