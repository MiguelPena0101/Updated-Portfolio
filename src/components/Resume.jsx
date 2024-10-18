import resumePDF from '../assets/resume.pdf';

const Resume = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl">Resume</h2>
      <a href={resumePDF} download className="text-blue-500">Download Resume</a>
      <ul className="mt-4 space-y-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default Resume;