// =============================
// SUBJECTS PER BRANCH
// =============================
const subjectsByBranch = {
  CSE: ["Programming", "Mathematics", "Data Structures",
        "Operating Systems", "Databases", "Networking",
        "Artificial Intelligence", "Machine Learning", "Interview Prep"],
  ECE: ["Electrical Engineering", "Mathematics", "Digital Electronics",
        "Signals & Systems", "Communications",
        "Embedded Systems", "DSP", "Wireless Systems", "VLSI"],
  Mechanical: ["Mechanics", "Engineering Drawing", "Thermodynamics",
               "Fluid Mechanics", "Strength of Materials",
               "Machine Design", "Manufacturing", "FEA", "Robotics"],
  Civil: ["Surveying", "Building Materials", "Structural Analysis",
          "Geotechnical Engineering", "Fluid Mechanics",
          "RCC Design", "Transportation", "Environmental Engineering",
          "Project Management"]
};

// =============================
// BOOK DATA
// =============================
const books = [

  // ===== CSE =====

  // CSE Year 1
  { title: "C Programming Language", author: "Kernighan & Ritchie",
    branch: "CSE", year: "1", difficulty: "Beginner", subject: "Programming",
    desc: "The classic text on C programming. Essential for every CS student starting their coding journey." },

  { title: "Introduction to Algorithms", author: "Cormen & Leiserson",
    branch: "CSE", year: "1", difficulty: "Advanced", subject: "Programming",
    desc: "The definitive guide to algorithms. Covers sorting, searching and problem-solving strategies." },

  { title: "Discrete Mathematics", author: "Kenneth H. Rosen",
    branch: "CSE", year: "1", difficulty: "Intermediate", subject: "Mathematics",
    desc: "Covers logic, sets, relations and graph theory — the mathematical foundation every CSE student needs." },

  { title: "Computer Science: An Overview", author: "Glenn Brookshear",
    branch: "CSE", year: "1", difficulty: "Beginner", subject: "Programming",
    desc: "Perfect first book for CS students. Covers all fundamental concepts in simple and clear language." },

  // CSE Year 2
  { title: "Data Structures and Algorithms", author: "Goodrich & Tamassia",
    branch: "CSE", year: "2", difficulty: "Intermediate", subject: "Data Structures",
    desc: "Comprehensive coverage of data structures. Balances theory and practical implementation." },

  { title: "Operating System Concepts", author: "Silberschatz & Galvin",
    branch: "CSE", year: "2", difficulty: "Intermediate", subject: "Operating Systems",
    desc: "Known as the Dinosaur Book. Standard text for OS — processes, memory, file systems and more." },

  { title: "Computer Networks", author: "Andrew S. Tanenbaum",
    branch: "CSE", year: "2", difficulty: "Intermediate", subject: "Networking",
    desc: "Thorough introduction to computer networking. Covers protocols, layers and internet architecture." },

  { title: "Data Structures Using C", author: "Reema Thareja",
    branch: "CSE", year: "2", difficulty: "Beginner", subject: "Data Structures",
    desc: "Simple and student-friendly introduction to data structures using C language with examples." },

  // CSE Year 3
  { title: "Database System Concepts", author: "Silberschatz & Korth",
    branch: "CSE", year: "3", difficulty: "Intermediate", subject: "Databases",
    desc: "Go-to textbook for DBMS. Covers SQL, normalization, and transaction management clearly." },

  { title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig",
    branch: "CSE", year: "3", difficulty: "Advanced", subject: "Artificial Intelligence",
    desc: "The Bible of AI. From search algorithms to machine learning — comprehensive for serious CS students." },

  { title: "Clean Code", author: "Robert C. Martin",
    branch: "CSE", year: "3", difficulty: "Intermediate", subject: "Programming",
    desc: "Teaches you to write readable, maintainable and professional code. Every developer must read this." },

  { title: "Computer Organization and Architecture", author: "William Stallings",
    branch: "CSE", year: "3", difficulty: "Intermediate", subject: "Operating Systems",
    desc: "Covers processor design, memory hierarchy, instruction sets and parallel processing concepts." },

  // CSE Year 4
  { title: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell",
    branch: "CSE", year: "4", difficulty: "Intermediate", subject: "Interview Prep",
    desc: "The ultimate guide for technical interviews. 189 programming questions with detailed solutions." },

  { title: "Deep Learning", author: "Goodfellow, Bengio & Courville",
    branch: "CSE", year: "4", difficulty: "Advanced", subject: "Machine Learning",
    desc: "Most comprehensive textbook on deep learning. Covers neural networks, CNNs, RNNs in depth." },

  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann",
    branch: "CSE", year: "4", difficulty: "Advanced", subject: "Databases",
    desc: "Essential reading for building scalable, reliable systems. Highly valued in the industry." },

  { title: "System Design Interview", author: "Alex Xu",
    branch: "CSE", year: "4", difficulty: "Intermediate", subject: "Interview Prep",
    desc: "Step-by-step guide to system design interviews. Covers scalability, load balancing and caching." },

  // ===== ECE =====

  // ECE Year 1
  { title: "Basic Electrical Engineering", author: "V.K. Mehta",
    branch: "ECE", year: "1", difficulty: "Beginner", subject: "Electrical Engineering",
    desc: "Perfect starting point for ECE students. Covers circuits, AC/DC systems and basic concepts clearly." },

  { title: "Engineering Mathematics", author: "B.S. Grewal",
    branch: "ECE", year: "1", difficulty: "Beginner", subject: "Mathematics",
    desc: "Most popular engineering maths book in India. Covers calculus, linear algebra and differential equations." },

  { title: "Electronic Devices and Circuit Theory", author: "Robert Boylestad",
    branch: "ECE", year: "1", difficulty: "Intermediate", subject: "Electrical Engineering",
    desc: "Thorough introduction to semiconductor devices and circuit analysis with worked examples." },

  { title: "A Course in Electrical and Electronic Measurements", author: "A.K. Sawhney",
    branch: "ECE", year: "1", difficulty: "Beginner", subject: "Electrical Engineering",
    desc: "Comprehensive coverage of electrical measurements, instruments and measurement techniques." },

  { title: "Digital Logic and Computer Design", author: "Morris Mano",
    branch: "ECE", year: "1", difficulty: "Beginner", subject: "Digital Electronics",
    desc: "Perfect intro to digital logic for first year ECE. Covers number systems, logic gates and boolean algebra." },

  { title: "Fundamentals of Digital Circuits", author: "A. Anand Kumar",
    branch: "ECE", year: "1", difficulty: "Intermediate", subject: "Digital Electronics",
    desc: "Student-friendly digital circuits book widely used in Indian universities with clear examples." },

  // ECE Year 2
  { title: "Signals and Systems", author: "Alan V. Oppenheim",
    branch: "ECE", year: "2", difficulty: "Intermediate", subject: "Signals & Systems",
    desc: "Authoritative text on signals and systems. Covers Fourier transforms and continuous/discrete signals." },

  { title: "Digital Electronics", author: "Morris Mano",
    branch: "ECE", year: "2", difficulty: "Intermediate", subject: "Digital Electronics",
    desc: "Comprehensive coverage of digital logic design, boolean algebra, and sequential circuits." },

  { title: "Electromagnetic Fields and Waves", author: "David K. Cheng",
    branch: "ECE", year: "2", difficulty: "Advanced", subject: "Electrical Engineering",
    desc: "Rigorous treatment of electromagnetic theory. Essential for antenna design and RF systems." },

  { title: "Network Analysis", author: "M.E. Van Valkenburg",
    branch: "ECE", year: "2", difficulty: "Intermediate", subject: "Electrical Engineering",
    desc: "Classic text on electric circuit analysis covering mesh, nodal analysis and network theorems." },

  { title: "Signals and Systems", author: "Oppenheim & Willsky",
    branch: "ECE", year: "2", difficulty: "Beginner", subject: "Signals & Systems",
    desc: "Beginner-friendly introduction to signals and systems covering basic Fourier and Laplace concepts." },

  // ECE Year 3
  { title: "Communication Systems", author: "Simon Haykin",
    branch: "ECE", year: "3", difficulty: "Intermediate", subject: "Communications",
    desc: "Standard text for analog and digital communications. Covers modulation, noise and channel capacity." },

  { title: "Microprocessors and Microcontrollers", author: "Krishna Kant",
    branch: "ECE", year: "3", difficulty: "Intermediate", subject: "Embedded Systems",
    desc: "Detailed coverage of 8085/8086 architecture and modern microcontrollers for embedded systems." },

  { title: "VLSI Design", author: "Neil Weste & David Harris",
    branch: "ECE", year: "3", difficulty: "Advanced", subject: "VLSI",
    desc: "Comprehensive guide to VLSI chip design covering CMOS circuits and logic synthesis." },

  { title: "Principles of Communication Systems", author: "Taub & Schilling",
    branch: "ECE", year: "3", difficulty: "Beginner", subject: "Communications",
    desc: "Student-friendly introduction to communication systems covering AM, FM and digital modulation." },

  { title: "Digital Signal Processing", author: "S.K. Mitra",
    branch: "ECE", year: "3", difficulty: "Intermediate", subject: "DSP",
    desc: "Clear introduction to DSP concepts. Covers sampling, filtering and spectral analysis with examples." },

  // ECE Year 4
  { title: "Digital Signal Processing", author: "Proakis & Manolakis",
    branch: "ECE", year: "4", difficulty: "Advanced", subject: "DSP",
    desc: "Definitive DSP text covering FIR/IIR filters, FFT and spectral analysis. Essential for signal processing." },

  { title: "Wireless Communications", author: "Andrea Goldsmith",
    branch: "ECE", year: "4", difficulty: "Advanced", subject: "Wireless Systems",
    desc: "Advanced coverage of wireless systems including OFDM, MIMO and 5G concepts for telecom careers." },

  { title: "Embedded Systems Design", author: "Frank Vahid & Tony Givargis",
    branch: "ECE", year: "4", difficulty: "Intermediate", subject: "Embedded Systems",
    desc: "Practical approach to embedded system design covering RTOS and real-world applications." },

  { title: "Antenna Theory: Analysis and Design", author: "Constantine Balanis",
    branch: "ECE", year: "4", difficulty: "Advanced", subject: "Wireless Systems",
    desc: "The standard reference for antenna design. Covers dipoles, arrays, apertures and modern antennas." },

  { title: "CMOS VLSI Design", author: "Weste & Harris",
    branch: "ECE", year: "4", difficulty: "Advanced", subject: "VLSI",
    desc: "Advanced VLSI design covering low power design, memory circuits and high speed digital systems." },

  // ===== MECHANICAL =====

  // Mechanical Year 1
  { title: "Engineering Mechanics: Statics", author: "R.C. Hibbeler",
    branch: "Mechanical", year: "1", difficulty: "Beginner", subject: "Mechanics",
    desc: "Clear introduction to statics. Excellent diagrams and step-by-step problem solving approach." },

  { title: "Engineering Drawing", author: "N.D. Bhatt",
    branch: "Mechanical", year: "1", difficulty: "Beginner", subject: "Engineering Drawing",
    desc: "Standard reference for engineering drawing in India. Covers orthographic projection and CAD basics." },

  { title: "Engineering Mechanics: Dynamics", author: "R.C. Hibbeler",
    branch: "Mechanical", year: "1", difficulty: "Intermediate", subject: "Mechanics",
    desc: "Comprehensive coverage of dynamics including kinematics, kinetics and energy methods." },

  { title: "Engineering Mathematics", author: "B.S. Grewal",
    branch: "Mechanical", year: "1", difficulty: "Beginner", subject: "Mechanics",
    desc: "Covers all mathematics needed for mechanical engineering — calculus, transforms and statistics." },

  { title: "Computer Aided Engineering Drawing", author: "Trymbaka Murthy",
    branch: "Mechanical", year: "1", difficulty: "Intermediate", subject: "Engineering Drawing",
    desc: "Modern engineering drawing using CAD tools. Covers AutoCAD basics and 3D modeling concepts." },

  // Mechanical Year 2
  { title: "Thermodynamics: An Engineering Approach", author: "Cengel & Boles",
    branch: "Mechanical", year: "2", difficulty: "Intermediate", subject: "Thermodynamics",
    desc: "Widely used thermodynamics text with real-world applications. Covers energy, entropy and cycles." },

  { title: "Fluid Mechanics", author: "Frank M. White",
    branch: "Mechanical", year: "2", difficulty: "Intermediate", subject: "Fluid Mechanics",
    desc: "Standard text for fluid mechanics. Covers fluid statics, flow dynamics and turbomachinery." },

  { title: "Strength of Materials", author: "R.K. Bansal",
    branch: "Mechanical", year: "2", difficulty: "Intermediate", subject: "Strength of Materials",
    desc: "Comprehensive coverage of stress, strain, beams and columns. Excellent for structural behavior." },

  { title: "Engineering Thermodynamics", author: "P.K. Nag",
    branch: "Mechanical", year: "2", difficulty: "Advanced", subject: "Thermodynamics",
    desc: "Advanced thermodynamics covering power cycles, refrigeration and gas dynamics in depth." },

  { title: "Fluid Mechanics and Machinery", author: "Modi & Seth",
    branch: "Mechanical", year: "2", difficulty: "Beginner", subject: "Fluid Mechanics",
    desc: "Student-friendly fluid mechanics covering flow equations, pumps and turbines with solved problems." },

  // Mechanical Year 3
  { title: "Machine Design", author: "V.B. Bhandari",
    branch: "Mechanical", year: "3", difficulty: "Intermediate", subject: "Machine Design",
    desc: "Comprehensive guide to mechanical component design. Covers shafts, gears, bearings and fatigue." },

  { title: "Manufacturing Engineering & Technology", author: "Kalpakjian & Schmid",
    branch: "Mechanical", year: "3", difficulty: "Advanced", subject: "Manufacturing",
    desc: "In-depth coverage of manufacturing processes including machining, forming and 3D printing." },

  { title: "Theory of Machines", author: "S.S. Rattan",
    branch: "Mechanical", year: "3", difficulty: "Intermediate", subject: "Mechanics",
    desc: "Covers kinematics and dynamics of machines including gears, cams, governors and flywheels." },

  { title: "Heat and Mass Transfer", author: "R.K. Rajput",
    branch: "Mechanical", year: "3", difficulty: "Intermediate", subject: "Thermodynamics",
    desc: "Detailed coverage of conduction, convection, radiation and mass transfer with solved problems." },

  { title: "Production Technology", author: "R.K. Jain",
    branch: "Mechanical", year: "3", difficulty: "Beginner", subject: "Manufacturing",
    desc: "Easy introduction to manufacturing processes covering casting, welding, machining and forming." },

  // Mechanical Year 4
  { title: "Finite Element Analysis", author: "P. Seshu",
    branch: "Mechanical", year: "4", difficulty: "Advanced", subject: "FEA",
    desc: "Practical introduction to FEA. Covers meshing, boundary conditions and simulation methods." },

  { title: "Robotics: Modelling, Planning and Control", author: "Siciliano et al.",
    branch: "Mechanical", year: "4", difficulty: "Advanced", subject: "Robotics",
    desc: "Comprehensive robotics text covering kinematics, dynamics and control systems for robotic arms." },

  { title: "Automobile Engineering", author: "Kirpal Singh",
    branch: "Mechanical", year: "4", difficulty: "Intermediate", subject: "Machine Design",
    desc: "Complete reference for automobile engineering covering engines, transmission and chassis systems." },

  { title: "Introduction to Finite Elements", author: "J.N. Reddy",
    branch: "Mechanical", year: "4", difficulty: "Intermediate", subject: "FEA",
    desc: "Clear introduction to FEM theory and applications in structural, thermal and fluid problems." },

  { title: "Introduction to Robotics", author: "John J. Craig",
    branch: "Mechanical", year: "4", difficulty: "Intermediate", subject: "Robotics",
    desc: "Beginner-friendly robotics covering forward/inverse kinematics and basic robot programming." },

  // ===== CIVIL =====

  // Civil Year 1
  { title: "Surveying Vol. 1", author: "B.C. Punmia",
    branch: "Civil", year: "1", difficulty: "Beginner", subject: "Surveying",
    desc: "Classic surveying textbook. Covers chain surveying, levelling and theodolite techniques clearly." },

  { title: "Building Materials", author: "S.K. Duggal",
    branch: "Civil", year: "1", difficulty: "Beginner", subject: "Building Materials",
    desc: "Comprehensive coverage of construction materials — cement, concrete, steel and timber." },

  { title: "Engineering Mechanics", author: "R.K. Bansal",
    branch: "Civil", year: "1", difficulty: "Beginner", subject: "Structural Analysis",
    desc: "Fundamental mechanics for civil engineers covering forces, equilibrium and simple structures." },

  { title: "Engineering Mathematics", author: "B.S. Grewal",
    branch: "Civil", year: "1", difficulty: "Beginner", subject: "Surveying",
    desc: "Essential mathematics for civil engineering covering calculus, statistics and numerical methods." },

  { title: "Surveying Vol. 2", author: "B.C. Punmia",
    branch: "Civil", year: "1", difficulty: "Intermediate", subject: "Surveying",
    desc: "Advanced surveying covering tacheometry, photogrammetry, curves and modern GPS surveying." },

  // Civil Year 2
  { title: "Structural Analysis", author: "R.C. Hibbeler",
    branch: "Civil", year: "2", difficulty: "Intermediate", subject: "Structural Analysis",
    desc: "Standard text for structural analysis. Covers trusses, beams and frames with clear solved examples." },

  { title: "Soil Mechanics and Foundation Engineering", author: "K.R. Arora",
    branch: "Civil", year: "2", difficulty: "Intermediate", subject: "Geotechnical Engineering",
    desc: "Widely used geotechnical text covering soil classification, permeability and foundation design." },

  { title: "Fluid Mechanics and Hydraulic Machines", author: "R.K. Bansal",
    branch: "Civil", year: "2", difficulty: "Intermediate", subject: "Fluid Mechanics",
    desc: "Covers fluid properties, flow through pipes, open channels and hydraulic turbines and pumps." },

  { title: "Strength of Materials", author: "R.K. Rajput",
    branch: "Civil", year: "2", difficulty: "Beginner", subject: "Structural Analysis",
    desc: "Student-friendly coverage of stress, strain, bending and torsion with solved examples." },

  { title: "Basic Geotechnical Engineering", author: "T.N. Nagaraj",
    branch: "Civil", year: "2", difficulty: "Beginner", subject: "Geotechnical Engineering",
    desc: "Easy introduction to soil mechanics for beginners covering basic soil properties and tests." },

  // Civil Year 3
  { title: "Reinforced Concrete Design", author: "Pillai & Menon",
    branch: "Civil", year: "3", difficulty: "Intermediate", subject: "RCC Design",
    desc: "Essential IS code-based RCC design book. Covers beams, slabs, columns with step-by-step procedures." },

  { title: "Transportation Engineering", author: "L.R. Kadiyali",
    branch: "Civil", year: "3", difficulty: "Intermediate", subject: "Transportation",
    desc: "Comprehensive coverage of highway design, pavement engineering and traffic engineering." },

  { title: "Advanced Structural Analysis", author: "Bhavikatti",
    branch: "Civil", year: "3", difficulty: "Advanced", subject: "Structural Analysis",
    desc: "Covers matrix methods, stiffness method and computer-aided structural analysis techniques." },

  { title: "Geotechnical Engineering", author: "C. Venkatramaiah",
    branch: "Civil", year: "3", difficulty: "Advanced", subject: "Geotechnical Engineering",
    desc: "Advanced coverage of slope stability, retaining walls, pile foundations and ground improvement." },

  { title: "Concrete Technology", author: "M.S. Shetty",
    branch: "Civil", year: "3", difficulty: "Beginner", subject: "RCC Design",
    desc: "Clear coverage of concrete materials, mix design, properties and quality control methods." },

  // Civil Year 4
  { title: "Environmental Engineering", author: "Peavy, Rowe & Tchobanoglous",
    branch: "Civil", year: "4", difficulty: "Advanced", subject: "Environmental Engineering",
    desc: "In-depth treatment of water supply, wastewater treatment and solid waste management." },

  { title: "Project Management for Construction", author: "Chris Hendrickson",
    branch: "Civil", year: "4", difficulty: "Intermediate", subject: "Project Management",
    desc: "Practical guide covering planning, scheduling, cost control and quality management." },

  { title: "Design of Steel Structures", author: "L.S. Negi",
    branch: "Civil", year: "4", difficulty: "Advanced", subject: "RCC Design",
    desc: "Comprehensive IS code based design of steel beams, columns, connections and roof trusses." },

  { title: "Water Supply and Sanitary Engineering", author: "B.C. Punmia",
    branch: "Civil", year: "4", difficulty: "Intermediate", subject: "Environmental Engineering",
    desc: "Covers water demand, treatment, distribution systems, sewerage and sanitation engineering." },

  { title: "Construction Project Management", author: "K.K. Chitkara",
    branch: "Civil", year: "4", difficulty: "Beginner", subject: "Project Management",
    desc: "Simple introduction to construction management covering contracts, planning and site supervision." },

];

// =============================
// STEP NAVIGATION
// =============================
function goTo(stepNumber) {
  if (stepNumber === 3) {
    const year   = document.getElementById("yearSelect").value;
    const branch = document.getElementById("branchSelect").value;
    if (year === "" || branch === "") {
      alert("Please select both Year and Branch!");
      return;
    }
  }
  const allSteps = document.querySelectorAll(".step");
  allSteps.forEach(function(step) {
    step.classList.add("hidden");
  });
  document.getElementById("step" + stepNumber).classList.remove("hidden");
}

// =============================
// LOAD SUBJECTS BY BRANCH
// =============================
function loadSubjects() {
  const branch = document.getElementById("branchSelect").value;
  const select = document.getElementById("subjectSelect");
  select.innerHTML = '<option value="">-- All Subjects --</option>';
  if (branch === "") return;
  const subjects = subjectsByBranch[branch];
  subjects.forEach(function(subject) {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    select.appendChild(option);
  });
}

// =============================
// SHOW BOOKS
// =============================
function showBooks() {
  const year    = document.getElementById("yearSelect").value;
  const branch  = document.getElementById("branchSelect").value;
  const subject = document.getElementById("subjectSelect").value;
  const diff    = document.getElementById("diffSelect").value;

  // First try exact year match
  let filtered = books.filter(function(book) {
    const matchYear    = (book.year === year);
    const matchBranch  = (branch  === "" || book.branch  === branch);
    const matchSubject = (subject === "" || book.subject === subject);
    const matchDiff    = (diff    === "" || book.difficulty === diff);
    return matchYear && matchBranch && matchSubject && matchDiff;
  });

  // If nothing found — ignore year, show all matching books
  let yearIgnored = false;
  if (filtered.length === 0) {
    yearIgnored = true;
    filtered = books.filter(function(book) {
      const matchBranch  = (branch  === "" || book.branch  === branch);
      const matchSubject = (subject === "" || book.subject === subject);
      const matchDiff    = (diff    === "" || book.difficulty === diff);
      return matchBranch && matchSubject && matchDiff;
    });
  }

  goTo(4);

  // Show count message
  const countEl = document.getElementById("resultCount");
  if (yearIgnored) {
    countEl.textContent = filtered.length + " books found for "
      + branch + " — showing all years for this subject";
  } else {
    countEl.textContent = filtered.length + " books found for "
      + branch + " — Year " + year;
  }

  const container = document.getElementById("booksContainer");

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h3>No books found 😔</h3>
        <p>Try selecting All Subjects or a different difficulty</p>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(function(book) {
    let diffClass  = "";
    let badgeClass = "";
    if (book.difficulty === "Beginner") {
      diffClass = "beginner"; badgeClass = "badge-beg";
    } else if (book.difficulty === "Intermediate") {
      diffClass = "intermediate"; badgeClass = "badge-int";
    } else {
      diffClass = "advanced"; badgeClass = "badge-adv";
    }
    html += `
      <div class="book-card ${diffClass}">
        <div class="card-title">${book.title}</div>
        <div class="card-author">✍️ ${book.author}</div>
        <div class="card-desc">${book.desc}</div>
        <div class="badges">
          <span class="badge badge-branch">${book.branch}</span>
          <span class="badge badge-year">Year ${book.year}</span>
          <span class="badge ${badgeClass}">${book.difficulty}</span>
          <span class="badge badge-branch">${book.subject}</span>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}