import React  from 'react';
import { useState } from 'react';
import { FaLaptopCode, FaUserMd, FaBusinessTime, FaPills, FaUniversity } from 'react-icons/fa';
import engg from "../assets/engg.jpg"
import exam5 from "../assets/exam3.jpg"
import exam3 from "../assets/exam30.jpg"
import exam4 from "../assets/exam5.jpg"
import medical from "../assets/medical.jpg"

const categories = [
  {
    id: 'engineering',
    title: 'Engineering',
    icon: <FaLaptopCode size={38} />,
    heading: 'Engineering Exam',
    content: `Joint Entrance Examination (JEE) MAIN will be conducted by the NTA from 2019 onwards. 
    This Examination was being conducted by the Central Board of Secondary Education (CBSE) till 2018.\n
    JEE Main is applicable for admission to NITs, IIITs and CFTIs...
    JEE Main is applicable for admission to NITs, IIITs and CFTIs participating though Central Seat Allocation Board subject to the condition that the candidate should have secured at least 75% marks in the 12th class examination, or be in the top 20 percentile in the 12th class examination conducted by the respective Boards. For SC/ST candidates the qualifying marks would be 65% in the 12thclass examination.
    
    Subject combinations required in the qualifying examination for admission to B.E./B.Tech. & B. Arch./B. Planning Courses in NITs, IIITs, and other CFTIs is as under:-

Course	Required Criteria based on Class 12th / Equivalent qualifying Examination
B.E/B.TECH	Passed qualifying examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/ Technical Vocational subject.
B.ARCH.	Passed qualifying examination with Mathematics, Physics, Chemistry.
B.PLANNING	Passed qualifying examination with Mathematics
The above mentioned policy could also be adopted by other Technical Institutions participating in counselling through JoSAA/CSAB. In case a State opts to admit students in the engineering Colleges affiliated to State Universities, the State may prepare separate rank list based on criteria decided by them.
    `,
    image: engg 
  },
  {
    id: 'medical',
    title: 'Medical',
    icon: <FaUserMd size={35} />,
    heading: 'Medical Exam',
    content: `The National Eligibility Cum Entrance Test (NEET) UG will be conducted by the NTA from 2019 onwards. This Test was being conducted by the Central Board of Secondary Education (CBSE) till 2018. NEET (UG) is applicable for admission to MBBS/BDS Courses in India in Medical/Dental Colleges run with the approval of Medical Council of India/Dental Council of India under the Union Ministry of Health and Family Welfare, Government of India except for the institutions established through an Act of Parliament i.e. AIIMS and JIPMER Puducherry

    The responsibility of the NTA will limited to the conduct of the entrance examination, declaration of result and providing All India Rank to the Directorate General Health Services, Government of India for the conduct of counselling for 15% All India Quota Seats and for supplying the result to state/other Counselling Authorities`,
    image: medical
  },
  {
    id: 'management',
    title: 'Management',
    icon: <FaBusinessTime size={35} />,
    heading: 'Management Exam',
    content: `Common Management Admission Test (CMAT) is a national level entrance examination for entry into management programmes. Till 2018, it was conducted by All India Council for Technical Education (AICTE) every year as per the directions of Ministry of Education (MoE), Government of India. The Test will now be conducted by the NTA. The CMAT is a three hour computer based online test which is conducted in a single session to evaluate the candidate's ability across various segments like Quantitative Technique, Logical Reasoning, Language Comprehension and General Awareness.

This test facilitates Institutions to select suitable graduate candidates for admission in all Management programs.

The CMAT score is accepted by all AICTE-Approved Institutions/University Departments/Constituent Colleges/Affiliated Colleges. The CMAT 2018 will be conducted on 20th January 2018.

Eligibility for CMAT 2019
Applicant must be a citizen of India.
Graduates in any discipline can apply for CMAT exam.
Final year students of Graduate Courses (10+2+3) whose result will be declared before commencement of admission for academic year 2019-20 can also apply for CMAT online exam.`,
    image: exam3
    },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    icon: <FaPills size={35} />,
    heading: 'Pharmacy Exam',
    content: `GRADUATE PHARMACY APTITUDE TEST (GPAT) is a national level entrance examination for entry into M.Pharm programmes. Till 2018, it was conducted by All India Council for Technical Education (AICTE) every year as per the directions of Ministry of Education (MoE), Government of India. The Test will now be conducted by the NTA.

This test facilitates institutions to select suitable Pharmacy graduates for admission into the Master's (M.Pharm) program. The GPAT is a three hour computer based online test which is conducted in a single session. The GPAT score is accepted by all AICTE-Approved Institutions/University Departments/Constituent Colleges/Affiliated Colleges. A few scholarships and other financial assistance in the field of Pharmacy are also given on the basis of the GPAT score.

Eligibility for GPAT 2019
Applicant must be a citizen of India.
They must be Bachelor's degree holders in Pharmacy (4 years after 10+2, including lateral entry candidates).
Those who are in the final year of B. Pharmacy course are also eligible for appearing in GPAT exam.
B.Tech (Pharmaceutical and fine chemical technology) / Equivalent Students are not eligible to appear for GPAT examination.`,
    image: exam5
  },
  {
    id: 'college',
    title: 'College/University',
    icon: <FaUniversity size={35} />,
    heading: 'University Admission',
    content: `On behalf of UGC, the National Eligibility Test (NET) is conducted for determining the eligibility of Indian nationals for the Eligibility for Assistant Professor only or Junior Research Fellowship & Eligibility for Assistant Professor Both in Indian Universities and Colleges.

Till recently, the CBSE conducted the NET in 84 subjects at 91 selected Cities of spread across the country.

From Dec 2018 onwards, the UGC- NET (for Eligibility for Assistant Professor only or Junior Research Fellowship & Eligibility for Assistant Professor both), will be conducted by the NTA.

The award of JRF and Eligibility for Assistant Professor both OR Eligibility for Assistant Professor only depends on the performance of the candidate in both the papers of NET in aggregate. However, the candidates qualifying exclusively for Assistant Professor are not to be considered for award of JRF. Candidates who qualify the Test for eligibility for Assistant Professor are governed by the rules and regulations for recruitment of Assistant Professor of the concerned universities/colleges/state governments, as the case may be.

Eligibility
Candidates who have secured at least 55% marks (without rounding off) in Master s Degree OR equivalent examination from universities/institutions recognised by UGC (on the website: https://www.ugc.ac.in/oldpdf/consolidated%20list%20of%20All%20universities.pdf) in Humanities (including languages) and Social Science, Computer Science & Applications, Electronic Science etc. are eligible for this Test.

The Other Backward Classes(OBC) belonging to non-creamy layer/Scheduled Caste(SC)/Scheduled Tribe(ST)/ persons with disability(PwD) category candidates who have secured at least 50% marks (without rounding off) in Master s degree or equivalent examination are eligible for this Test.

Candidates who are pursuing their Master's degree or equivalent course or candidates who have appeared for their qualifying Master s degree (final year) examination and whose result is still awaited or candidates whose qualifying examinations have been delayed may also apply for this test. However, such candidates will be admitted provisionally and shall be considered eligible for award of Junior Research Fellowship/eligibility for Assistant Professor only after they have passed their Master's Degree OR equivalent examination with at least 55% marks (50% marks in case of OBC falling in Non-Creamy layer/SC/ST/PwD (persons with disability)) category candidates. Such candidates must complete their Masters degree or equivalent examination within two years from the date of NET result with required percentage of marks, failing which they shall be treated as disqualified.

Candidates belonging to third gender in other words transgender would be eligible to draw the same relaxation in fee, age and qualifying criteria for NET (i.e. Junior Research Fellowship and Assistant Professor) as are available to SC/ST/PwD categories. The subject wise cut-offs for this category should be the lowest among those for SC/ST/PwD/OBC NCL categories in the corresponding subject.

The Ph.D. degree holders whose Master s level examination had been completed by 19th September 1991 (irrespective of date of declaration of result) shall be eligible for a relaxation of 5% in aggregate marks (i.e. from 55% to 50%) for appearing in NET.

Candidates are advised to appear in the subject of their post graduation only. The candidates, whose post graduation subject is not covered in the list of subjects, may appear in a related subject.

Candidates having post-graduate diploma/certificate awarded by Indian University/ Institute or foreign degree/diploma/certificate awarded by the foreign University/institute should in their own interest, ascertain the equivalence of their diploma/degree/certificate with Master s degree of recognized Indian universities from Association of Indian Universities (AIU), New Delhi. (www.aiu.ac.in)`,
    image: exam4
  }
];
export default function CategorySection() {
  const [selected, setSelected] = useState('engineering');
  const current = categories.find(cat => cat.id === selected);

  return (
    <div className="bg-gray-900 text-white px-6 py-1 items-center flex flex-col  ">
      <div className="flex flex-wrap justify-between m-1   w-[1400px]  border-b-2 mb-8">
        {categories.map(cat => (
          <div
            key={cat.id}
            className={`flex flex-col m-0.5 items-center cursor-pointer px-5 py-7 rounded-t-3xl transition-all duration-300  w-[270px] h-[140px] ${
              selected === cat.id ? 'bg-white text-green-600 shadow-lg' : 'text-white hover:bg-white hover:text-green-500'
    
            }`}
            onClick={() => setSelected(cat.id)}
          >
            <div className="mb-1 border-2 border-green-500 rounded-full p-[15px] text-orange-400 ">{cat.icon}</div>
            <span className="text-xl font-semibold">{cat.title}</span>
          </div>
        ))}
      </div>

 
      <div className="flex flex-col md:flex-row  items-center w-[1400px] gap-9">
       
        <div className=" bg-transparent p-6 rounded-lg shadow-lg h-[400px]  w-[900px] overflow-y-auto">
          <h2 className="text-4xl font-bold text-orange-400 mb-2 border-b border-orange-400 pb-1">
            {current.heading}
          </h2>
          <p className="text-lg text-amber-50 whitespace-pre-line leading-relaxed">{current.content}</p>
        </div>

      
        <div className="w-full md:w-[480px] border-2 h-full  border-white p-1 rounded-lg shadow-lg">
          <img src={current.image} alt={current.title} className="rounded-md w-full h-[250px] object-cover" />
        </div>
      </div>
    </div>
  );
}
