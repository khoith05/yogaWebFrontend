import React, {useState} from 'react';
import ReactModal from 'react-modal';

const Modal = (props) => {
    return (
        <ReactModal
          isOpen={props.isOpen}
          onRequestClose={props.onClose}
          contentLabel="Example Modal"
        >
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <button onClick={props.onClose}>x</button>
        </ReactModal>
      );
};

const PopupVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="my-button"  onClick={openModal}><span>Instructions for placing the camera</span></button>
            <Modal 
            isOpen={isOpen}
            onClose={closeModal}
            title="Example Modal"
            content="This is an example modal."
          />
        </div>
    )

}

export default PopupVideo;