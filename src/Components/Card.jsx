import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import Modal from 'react-modal';
import '../styles.css';

Modal.setAppElement('#root');

const Card = ({ id, text, position, onUpdatePosition }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDragStop = (e, data) => {
        onUpdatePosition(id, data.x, data.y);
    };

    const handleShowMore = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Draggable
                position={{ x: position.x, y: position.y }}
                onStop={handleDragStop}
            >
                <ResizableBox width={200} height={100} minConstraints={[150, 100]} maxConstraints={[400, 300]}>
                    <div className="card">
                        <p>{text.substring(0, 20)}... <button onClick={handleShowMore}>Show More</button></p>
                    </div>
                </ResizableBox>
            </Draggable>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Detailed Text"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h2>Detailed Text</h2>
                <p>{text}</p>
                <button onClick={handleCloseModal}>Close</button>
            </Modal>
        </>
    );
    
};

export default Card;
