import React from 'react';
import styles from './CourseList.module.css'
import Course from "../CourseInfo";

interface IProps {
    selectedCourses: string[]
    setSelectedCourses: (selectedCourses: string[]) => void
}

interface ICourse {
    title: string;
    description: string;
    image: string;
}

const courses: ICourse[] = [
    {
        title: 'Spanish for Beginners',
        description: 'Learn the basics of Spanish grammar and vocabulary.',
        image: '/spanish-for-beginners.jpg',
    },
    {
        title: 'French Conversation',
        description: 'Improve your French speaking skills through interactive conversations.',
        image: '/french-conversation.jpg',
    },
    {
        title: 'German Grammar',
        description: 'Master German grammar rules and sentence structure.',
        image: '/german-grammar.jpg',
    }
];

const CourseList: React.FC<IProps> = ({selectedCourses, setSelectedCourses}: IProps) => {
    const handleCourseSelection = (title: string) => {
        if (!selectedCourses.includes(title)) {
            setSelectedCourses([...selectedCourses, title])
        }
    }

    const handleCourseDeselection = (title: string) => {
        if (selectedCourses.includes(title)) {
            setSelectedCourses(selectedCourses.filter(courseTitle => courseTitle !== title))
        }
    }

    return (
        <section id="courses">
            <h2>Our courses</h2>
            <div className={styles.courseContainer}>
                {courses.map(course => (
                    <Course title={course.title}
                            description={course.description}
                            image={course.image}
                            onSelect={() => handleCourseSelection(course.title)}
                            onDeselect={() => handleCourseDeselection(course.title)}/>
                ))}
            </div>
        </section>
    );
}

export default CourseList;