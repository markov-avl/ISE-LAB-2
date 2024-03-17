import React, {useState} from 'react';
import styles from './CourseInfo.module.css'

interface IProps {
    title: string;
    description: string;
    image: string;
    onSelect: () => void
    onDeselect: () => void
}

const CourseInfo: React.FC<IProps> = ({title, description, image, onSelect, onDeselect}: IProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const handleButtonClick = () => {
        isSelected ? onDeselect() : onSelect()
        setIsSelected(!isSelected)
    }

    return (
        <div className={styles.course}>
            <div className={styles.imgContainer}>
                <img src={image} alt={title}/>
            </div>
            <div className={styles.courseInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={handleButtonClick}
                        className={isSelected ? styles.selectedButton : styles.deselectedButton}>
                    {isSelected ? 'Deselect' : 'Select'}
                </button>
            </div>
        </div>
    );
}

export default CourseInfo;