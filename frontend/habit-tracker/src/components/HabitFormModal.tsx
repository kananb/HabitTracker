// HabitFormModal.tsx
import React, { useState } from 'react';
import './HabitFormModal.css';

interface Habit {
    title: string;
    successThresholdHours: number | null;
    successThresholdMinutes: number | null;
    cadence: string;
    importance: number | null;
}

const HabitFormModal: React.FC<{ isVisible: boolean; toggleVisibility: () => void }> = ({ isVisible, toggleVisibility }) => {
    const [habit, setHabit] = useState<Habit>({
        title: '',
        successThresholdHours: null,
        successThresholdMinutes: null,
        cadence: '',
        importance: null,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setHabit((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(habit);
        toggleVisibility(); // Close the modal after submission
    };

    return (
        isVisible ? (
            <div className="overlay">
                <div className="modal">
                    <div className="title">
                        <input type="text" name="title" placeholder="New habit" value={habit.title} onChange={handleInputChange} className="input" />
                        <input type="text" name="priority" value={habit.importance || 0} onChange={handleInputChange} className="input priority" />
                    </div>
                    
                    <div className="when">
                        <div className="cadence">
                            <label className="label">Cadence</label>
                            <select name="cadence" value={habit.cadence} onChange={handleInputChange} className="dropdown">
                                <option value="daily">Every day</option>
                                <option value="bidaily">Every other day</option>
                                <option value="semiweekly">Twice a week</option>
                                <option value="weekly">Once a week</option>
                                <option value="semimonthly">Twice a month</option>
                                <option value="monthly">Once a month</option>
                            </select>
                        </div>

                        <div className="threshold">
                            <label className="label">Success Threshold</label>
                            <div className="duration">
                                <input type="text" name="successThresholdHours" placeholder="hours" value={habit.successThresholdHours || ""} onChange={handleInputChange} className="input" />
                                <span className="colon">:</span>
                                <input type="text" name="successThresholdMinutes" placeholder="minutes" value={habit.successThresholdMinutes || ""} onChange={handleInputChange} className="input" />
                            </div>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <button onClick={handleSubmit} className="button add-habit-button">Add Habit</button>
                        <button onClick={toggleVisibility} className="button close-button">Close</button>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default HabitFormModal;
