export const company = {
  name: "TrueCare-Insurance",
  phone: "+15153052213",
  whatsapp: "+15152022826",
  email: "rosario@truecare-insurance.com",
};

export const benefits = [
  "Atención cercana y humana",
  "Comunicación directa por llamada o WhatsApp",
  "Acompañamiento durante todo el proceso",
  "Experiencia en seguros y asesorías",
];

export const services = [
  {
    icon: "health",
    key: "medicare",
    href: "/services#medicare",
  },
  {
    icon: "claims",
    key: "life",
    href: "/services#life-insurance",
  },
  {
    icon: "vehicle",
    key: "health",
    href: "/services#health-insurance",
  },
];



/* export const whatWeDoDetails = [
  {
  id: "medicare",
  title: "Medicare Plans",
  image: "/images/medicarePlans.png",
  summary:
    "Medicare is a federal health insurance program for people age 65 or older, and for certain individuals under 65 with disabilities or specific health conditions.",
  details: [
    "Medicare Part A may help cover inpatient hospital care, skilled nursing facility care, hospice care, and some home health care.",
    "Medicare Part B may help cover doctor services, outpatient care, durable medical equipment, home health care, and preventive services.",
    "Medicare Advantage, also known as Part C, is an alternative to Original Medicare that often combines Part A, Part B, and sometimes Part D into one plan.",
    "Medicare Part D may help cover the cost of prescription drugs, including many recommended vaccines.",
    "Medicare Supplement plans, also called Medigap, may help cover some costs Original Medicare does not pay, such as copayments, coinsurance, and deductibles.",
    "Eligibility may be based on age, disability, End-Stage Renal Disease, or other qualifying health conditions.",
  ],
},
  {
    id: "life-insurance",
    title: "Life Insurance",
    image: "/images/lifeInsurance.png",
    summary:
      "Term, universal, and whole life insurance options designed to help protect your family.",
    details: [
      "Life insurance may help with debt protection, income replacement, family protection, and future planning.",
      "Options may include term life, universal life, and whole life insurance.",
    ],
  },
  {
    id: "final-expense",
    title: "Final Expense Insurance",
    image: "/images/expenseInsurance.png",
    summary:
      "Coverage designed to help families with funeral costs and other final expenses.",
    details: [
      "This type of life insurance may help loved ones cover funeral expenses.",
      "It can help reduce the financial stress of final arrangements.",
    ],
  },
  {
    id: "cancer-insurance",
    title: "Cancer Insurance",
    image: "/images/cancerInsurance.png",
    summary:
      "Supplemental coverage designed to provide support during cancer diagnosis and treatment.",
    details: [
      "Cancer insurance may help with costs related to diagnosis, treatment, and recovery.",
      "It can provide additional financial support beyond primary health coverage depending on the policy.",
    ],
  },
  {
    id: "indemnity-plans",
    title: "Indemnity Plans",
    image: "/images/indemnity.png",
    summary:
      "Medical plans that may pay a fixed cash amount for certain covered medical services.",
    details: [
      "These plans may provide cash benefits for specific services such as hospitalization.",
      "They can help with out-of-pocket costs depending on the plan.",
    ],
  },
  {
    id: "dental-vision",
    title: "Dental & Vision Insurance",
    image: "/images/dental&Vision.png",
    summary:
      "Coverage options for individual and family dental and vision needs.",
    details: [
      "Dental plans may help with preventive services such as exams and cleanings.",
      "They may also help with basic and major dental services depending on the plan.",
      "Vision coverage may help with eye exams, glasses, or contact lenses depending on the plan.",
    ],
  },
  {
    id: "long-term-care",
    title: "Long Term Care",
    image: "/images/longTermCare.png",
    summary:
      "Financial products designed to help create steady income for retirement planning.",
    details: [
      "Annuities may help support long-term retirement income goals.",
      "They can be part of a strategy for future financial stability.",
    ],
  },
  {
    id: "group-insurance",
    title: "Group Insurance",
    image: "/images/groupInsurance.png",
    summary:
      "Insurance options for companies with more than two employees.",
    details: [
      "Group insurance can help businesses provide coverage options for their employees.",
      "Plan options may vary depending on the company size and needs.",
    ],
  },
]; */

export const whatWeDoDetails = [
  {
    id: "medicare",
    translationKey: "medicare",
    image: "/images/medicarePlans.png",
  },
  {
    id: "life-insurance",
    translationKey: "lifeInsurance",
    image: "/images/lifeInsurance.png",
  },
  {
    id: "health-insurance",
    translationKey: "healthInsurance",
    image: "/images/indemnity.png",
  },
  {
    id: "retirement-planning",
    translationKey: "retirementPlanning",
    image: "/images/longTermCare.png",
  },
  {
    id: "group-insurance",
    translationKey: "groupInsurance",
    image: "/images/groupInsurance.png",
  },
];
/* export const whatWeDoDetails = [
  {
    id: "medicare",
    title: "Medicare",
    image: "/images/medicarePlans.png",
    summary:
      "Guidance for Medicare options, including Medicare Advantage, Medicare Supplement, and prescription drug coverage.",
    details: [
      "Medicare Part A may help cover inpatient hospital care, skilled nursing facility care, hospice care, and some home health care.",
      "Medicare Part B may help cover doctor services, outpatient care, durable medical equipment, home health care, and preventive services.",
      "Medicare Advantage, also known as Part C, is an alternative to Original Medicare and often combines Part A, Part B, and sometimes Part D into one plan.",
      "Medicare Part D may help cover the cost of prescription drugs, including many recommended vaccines.",
      "Medicare Supplement plans, also called Medigap, may help cover some costs Original Medicare does not pay, such as copayments, coinsurance, and deductibles.",
      "Eligibility may be based on age, disability, End-Stage Renal Disease, or other qualifying health conditions.",
    ],
  },
  {
    id: "life-insurance",
    title: "Life Insurance",
    image: "/images/lifeInsurance.png",
    summary:
      "Life insurance options designed to help protect your family, prepare for final expenses, and support long-term financial planning.",
    details: [
      "Term Life Insurance may provide coverage for a specific period of time and can help protect your family during important financial years.",
      "Whole Life Insurance may provide lifelong protection and can include cash value depending on the policy.",
      "Universal Life Insurance may offer flexible coverage options and may support long-term planning goals.",
      "Final Expense Insurance may help loved ones cover funeral costs, burial expenses, and other final arrangements.",
      "Life insurance can help with income replacement, debt protection, family protection, and future planning.",
    ],
  },
  {
    id: "health-insurance",
    title: "Health Insurance",
    image: "/images/indemnity.png",
    summary:
      "Supplemental and health-related coverage options, including indemnity plans, dental and vision, and cancer insurance.",
    details: [
      "Indemnity Plans may provide cash benefits for certain covered medical services, such as hospitalization or other qualifying medical events.",
      "Dental Insurance may help with preventive services such as exams and cleanings, as well as basic or major dental care depending on the plan.",
      "Vision Insurance may help with eye exams, glasses, contact lenses, or other vision-related needs depending on the plan.",
      "Cancer Insurance may provide additional financial support during diagnosis, treatment, recovery, and related expenses.",
      "Coverage options vary by plan, eligibility, location, and personal situation.",
    ],
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning",
    image: "/images/longTermCare.png",
    summary:
      "Planning support for long-term care needs, retirement income, and future financial stability.",
    details: [
      "Long Term Care coverage may help with care needs that are not usually covered by standard health insurance.",
      "This type of planning may help protect savings from the high costs of extended care.",
      "Annuities may help create steady income for retirement planning.",
      "Retirement planning can help clients prepare for future healthcare, income, and protection needs.",
      "Our team helps clients review options based on their goals, age, budget, and personal situation.",
    ],
  },
  {
    id: "group-insurance",
    title: "Group Insurance",
    image: "/images/groupInsurance.png",
    summary:
      "Insurance options for companies that want to support employees with coverage solutions.",
    details: [
      "Group Insurance can help businesses offer coverage options to their employees.",
      "Plan options may vary depending on company size, employee needs, and available carriers.",
      "This can be useful for companies with more than two employees.",
      "Group coverage may help businesses improve employee benefits and support retention.",
      "Our team can help employers review available options and understand how group coverage may work.",
    ],
  },
]; */