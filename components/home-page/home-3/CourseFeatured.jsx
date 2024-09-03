const coursesData = [
  {
    id: 1,
    tag: "PRO",
    title: "Results-Driven",
    level: "Our focus is on delivering measurable results that drive growth and profitability for our clients",
    numClasses: "Our extra push - your great result",
    tag2: "FEATURED",
  },
  {
    id: 2,
    tag: "PRO",
    title: "Innovation",
    level: "We are constantly exploring new technologies and strategies to stay ahead in the digital landscape",
    numClasses: "Leveraging cutting-edge approaches",
    tag2: "FEATURED",
  },
  {
    id: 3,
    tag: "PRO",
    title: "Customer Focus",
    level: "Your success is our priority",
    numClasses: "We provide personalized support and solutions tailored to your unique needs",
    tag2: "FEATURED",
  },
  {
    id: 4,
    tag: "PRO",
    title: "Integrity",
    level: "We believe in honest and transparent business practices",
    numClasses: "Our relationships with partners are built on trust and mutual respect",
    tag2: "FEATURED",
  },
];

const CourseFeatured = () => {
  return (
    <>
      {coursesData.map((course) => (
        <div className="col-sm-6 d-flex flex-column space-fix" key={course.id}>
          <a
            href="#"
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            <span className="tag fw-500 text-white text-uppercase">
              {course.tag}
            </span>
            <h4 className="mb-0 mt-25">{course.title}</h4>
            <ul className="style-none pb-40 lg-pb-20 ">
              <li>{course.level}</li>
              <li>{course.numClasses}</li>
            </ul>
            <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
              {course.tag2}
            </span>
          </a>
          {/* /.card-style-nineteen */}
        </div>
      ))}
    </>
  );
};

export default CourseFeatured;
