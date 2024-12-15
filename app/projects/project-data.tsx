export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Type-II Superconductors",
    year: 2024,
    description:
      "Investigated the effects of hole drilling on Type-II superconductors to assess quality changes. Simulated outcomes with Bash scripts and analyzed data using Python, presenting findings at a symposium.",
    url: "/projects/Superconductors.pdf",
  },
  {
    title: "Obesity Crisis",
    year: 2024,
    description:
      "Analyzed obesity trends and contributing factors through national datasets. Applied machine learning models and statistical techniques to uncover insights, contributing to informed decision-making.",
    url: "/projects/Obesity.pdf",
  },
  {
    title: "Housing Shortage",
    year: 2024,
    description:
      "Examined census-level data to identify key drivers of housing shortages. Applied data analysis and modeling techniques to quantify trends and propose solutions.",
    url: "/projects/Housing_Shortage.pdf",
  },
  {
    title: "Teacher Shortage",
    year: 2023,
    description:
      "Investigated national education data to understand teacher shortages. Leveraged statistical models to analyze regional disparities and factors influencing teacher retention.",
    url: "/projects/Teacher_Shortage.pdf",
  },
  {
    title: "E-Bike Usage",
    year: 2023,
    description:
      "Conducted analysis on e-bike usage patterns using census data. Applied machine learning models to identify trends and evaluate factors influencing adoption rates.",
    url: "/projects/E-Bikes.pdf",
  },
  
];
