import { useState } from 'react';
import HabitFormModal from './components/HabitFormModal';
import './App.css';
import './components/HabitFormModal.css';

function App() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <div>
            <button onClick={toggleModal}>Add New Habit</button>
            <HabitFormModal isVisible={isModalVisible} toggleVisibility={toggleModal} />
        </div>
    );
}

export default App;
