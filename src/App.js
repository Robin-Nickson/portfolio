import React, { useState } from 'react';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('about');

    return (
        <div className="app">
            <header className="header">Robin Nickson - Portfolio</header>
            <nav className="nav">
                <button onClick={() => setActiveSection('about')}>About</button>
                <button onClick={() => setActiveSection('education')}>Education</button>
                <button onClick={() => setActiveSection('projects')}>Projects</button>
                <button onClick={() => setActiveSection('skills')}>Skills</button>
                <button onClick={() => setActiveSection('achievements')}>Achievements</button>
                <button onClick={() => setActiveSection('responsibilities')}>Responsibilities</button>
                <button onClick={() => setActiveSection('contact')}>Contact</button>
            </nav>
            <div className="container">
                {activeSection === 'about' && (
                    <section className="section">
                        <h2>About Me</h2>
                        <p>I am a highly motivated B.Tech IT student who loves problem-solving and web development. My passion lies in building efficient and scalable web applications while continuously improving my knowledge in Data Structures and Algorithms.</p>
                        <p>Currently, I am pursuing my degree at St. Joseph's Institute of Technology, Chennai, maintaining a strong academic record with a CPI of 8.44.</p>
                    </section>
                )}
                {activeSection === 'education' && (
                    <section className="section">
                        <h2>Education</h2>
                        <p><b>B.Tech in Information Technology</b> - St. Joseph's Institute of Technology, Chennai</p>
                        <p><b>Higher Secondary (XII)</b> - Mount Zion Matriculation Higher Secondary School (93%)</p>
                        <p><b>Secondary (X)</b> - Mount Zion Matriculation Higher Secondary School (83%)</p>
                    </section>
                )}
                {activeSection === 'projects' && (
                    <section className="section">
                        <h2>Projects</h2>
                        <p><b>Farm Network</b>: A web application designed to connect farmers with clients, making agricultural commerce more efficient and accessible.</p>
                        <p><b>Tylerize</b>: A self-improvement platform that helps users track their progress in personal development and learning goals.</p>
                        <p><b>Text Case Transformer</b>: A simple yet powerful tool for transforming text cases, removing spaces, and previewing formatted content.</p>
                    </section>
                )}
                {activeSection === 'skills' && (
                    <section className="section">
                        <h2>Skills</h2>
                        <p>Programming Languages: Java, Python, JavaScript, C, Go</p>
                        <p>Frameworks & Tools: React, Node.js, Express.js, Git, GitHub</p>
                        <p>Databases: SQL, MongoDB</p>
                        <p>Key Topics: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems</p>
                    </section>
                )}
                {activeSection === 'achievements' && (
                    <section className="section">
                        <h2>Achievements</h2>
                        <p>🏆 Secured 2nd Place in Code Cascade 2024, demonstrating strong problem-solving skills.</p>
                        <p>🥈 Runner-up in a Web Design Hackathon at Hindustan University 2023, showcasing innovative UI/UX design abilities.</p>
                        <p>💡 Successfully participated in HACK-AI-THON, a 24-hour technical hackathon, developing an AI-driven application.</p>
                    </section>
                )}
                {activeSection === 'responsibilities' && (
                    <section className="section">
                        <h2>Positions of Responsibility</h2>
                        <p><b>House Captain</b> - Led and managed intra & inter-school activities, developing strong leadership and event coordination skills.</p>
                        <p><b>Hackathon Team Lead</b> - Guided multiple teams in hackathons, fostering teamwork, innovation, and quick problem-solving abilities.</p>
                    </section>
                )}
                {activeSection === 'contact' && (
                    <section className="section links">
                        <h2>Contact</h2>
                        <p>Feel free to reach out for collaborations, projects, or just a friendly tech chat!</p>
                        <a href="mailto:robin12nickson@gmail.com">Email</a>
                        <a href="https://github.com/Robin-Nickson">GitHub</a>
                        <a href="https://linkedin.com/in/robin-nickson-525310258">LinkedIn</a>
                        <a href="https://leetcode.com/u/robin12nickson/">LeetCode</a>
                        <a href="https://www.geeksforgeeks.org/user/ujvalmaurya/">GeeksForGeeks</a>
                    </section>
                )}
            </div>
        </div>
    );
}

export default App;
