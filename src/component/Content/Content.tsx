import React, {useState} from 'react';
import styles from './Content.module.css'
import CourseList from "../CourseList";
import ContactForm from "../ContactForm";

const Content: React.FC = () => {
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

    return (
        <div className={styles.course}>
            <CourseList selectedCourses={selectedCourses}
                        setSelectedCourses={setSelectedCourses}/>
            <ContactForm selectedCourses={selectedCourses}/>
        </div>
    );
}

export default Content;