export interface ProjectCaseStudy {
  problem: string;
  dataset: string;
  dataCleaning: string[];
  eda: string[];
  methodology: string;
  toolsUsed: string[];
  keyInsights: string[];
  visualizations: string[];
  recommendations: string[];
  results: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  metrics: { label: string; value: string }[];
  caseStudy: ProjectCaseStudy;
}

export const PROJECTS: Project[] = [
  {
    id: "customer-behavior-analysis",
    title: "Customer Shopping Behavior Analysis",
    subtitle: "Python + SQL + Power BI + Pandas (Feb 2026)",
    description: "Analyzed 100,000+ retail transaction records using SQL and Pandas to uncover purchasing patterns and segmented customers into 5 distinct behavior groups. Designed interactive Power BI dashboards enabling data-driven decision-making.",
    technologies: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/jxnaveen-naveen/Customer-behavior-analysis",
    demoUrl: "https://github.com/jxnaveen-naveen/Customer-behavior-analysis",
    metrics: [
      { label: "Dataset Size", value: "100,000+ Rows" },
      { label: "Customer Segments", value: "5 Distinct Groups" },
      { label: "BI Dashboard", value: "Interactive Power BI" },
    ],
    caseStudy: {
      problem: "Retail stakeholders needed to understand hidden purchasing patterns across customer demographics and product categories to optimize marketing spend and store inventory placement.",
      dataset: "Large-scale retail transactional dataset containing 100,000+ records with attributes like Customer Age, Gender, Item Purchased, Category, Spend Amount, Location, and Loyalty Subscription status.",
      dataCleaning: [
        "Preprocessed raw transactional logs using Pandas to handle null values and structural inconsistencies.",
        "Standardized product category taxonomies and monetary value fields into numerical floats.",
        "Engineered derived features including Age Tiers, Average Spend per Order, and Seasonal Category Breakdown."
      ],
      eda: [
        "Analyzed spend distribution across 5 distinct customer behavior segments using SQL CTEs and group aggregations.",
        "Evaluated category performance across seasonal transitions and demographic cohorts.",
        "Identified top-performing merchandise and high-value customer subscription profiles."
      ],
      methodology: "Executed complex SQL queries and Pandas data manipulation scripts for cohort segmentation. Exported refined aggregations to Power BI to design executive interactive dashboards.",
      toolsUsed: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      keyInsights: [
        "Segmented retail shoppers into 5 distinct behavioral tiers based on purchase frequency and average basket size.",
        "Outerwear and clothing categories drove the highest revenue percentage during seasonal shifts.",
        "Interactive dashboard slicers allowed instant drill-downs into regional sales performance."
      ],
      visualizations: [
        "Interactive Power BI Dashboard with dynamic slicers for Region, Category, and Gender.",
        "Customer Behavior Heatmap plotting Age Tiers against Category Spend.",
        "SQL Aggregated Revenue Breakdown by Season."
      ],
      recommendations: [
        "Tailor targeted promotional offers to high-value customer segments.",
        "Optimize Q3/Q4 inventory stocking for top-performing product categories.",
        "Automate monthly data ingestion directly into the Power BI model."
      ],
      results: "Delivered actionable consumer behavior insights and interactive BI dashboards for data-driven decision making."
    }
  },
  {
    id: "heart-disease-analysis",
    title: "Heart Disease Distribution Analysis",
    subtitle: "Python + Seaborn + Matplotlib + Pandas + NumPy (May 2026)",
    description: "Performed exploratory data analysis and feature engineering, including correlation analysis and distribution checks, to identify key indicators of heart disease risk such as chest pain type, cholesterol, and max heart rate.",
    technologies: ["Python", "Seaborn", "Matplotlib", "Pandas", "NumPy", "EDA"],
    githubUrl: "https://github.com/jxnaveen-naveen/heart-disease-distribution-analysis",
    demoUrl: "https://github.com/jxnaveen-naveen/heart-disease-distribution-analysis",
    metrics: [
      { label: "Analysis Type", value: "Clinical EDA & Feature Eng." },
      { label: "Key Indicators", value: "Chest Pain, Chol, HR" },
      { label: "Visualizations", value: "Heatmaps & Confusion Matrix" },
    ],
    caseStudy: {
      problem: "Identifying key clinical parameters and statistical correlations associated with cardiovascular risk to assist diagnostic decision-making.",
      dataset: "Clinical cardiovascular dataset containing medical attributes such as Age, Sex, Chest Pain Type (cp), Resting Blood Pressure (trestbps), Serum Cholesterol (chol), Maximum Heart Rate Achieved (thalach), and Exercise Induced Angina.",
      dataCleaning: [
        "Cleaned and normalized clinical continuous variables using NumPy and Pandas.",
        "Checked for missing values, distribution skewness, and extreme medical outliers.",
        "Encoded ordinal categorical variables for correlation analysis."
      ],
      eda: [
        "Performed univariate and bivariate distribution checks across age and cholesterol cohorts.",
        "Evaluated correlation matrices to uncover relationships between chest pain type, max heart rate, and heart disease diagnosis.",
        "Plotted confusion matrices and distribution density plots across risk factors."
      ],
      methodology: "Leveraged Python statistical libraries (Pandas, NumPy) for data processing and exploratory feature analysis. Generated publication-ready visualizations using Matplotlib and Seaborn.",
      toolsUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      keyInsights: [
        "Chest pain type and maximum heart rate achieved (thalach) showed strong statistical correlation with diagnosis.",
        "Serum cholesterol levels exhibited distinct distribution clustering across age demographics.",
        "Multivariate Seaborn heatmaps visually highlighted compound risk factors."
      ],
      visualizations: [
        "Seaborn Correlation Heatmap of clinical parameters.",
        "Distribution Density Plots for Cholesterol and Max Heart Rate.",
        "Confusion Matrix and Risk Factor Bar Summaries."
      ],
      recommendations: [
        "Prioritize chest pain evaluation and maximum heart rate metrics in diagnostic preliminary screening.",
        "Utilize feature importance rankings to streamline clinical data entry for predictive modeling."
      ],
      results: "Visualized model insights and health trends using Matplotlib and Seaborn to support diagnostic decision-making."
    }
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction Pipeline",
    subtitle: "Python + Scikit-learn + Pandas + Machine Learning",
    description: "End-to-end Machine Learning classification pipeline built with Scikit-learn to classify customers at risk of churn, enabling proactive retention strategies.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Random Forest"],
    githubUrl: "https://github.com/jxnaveen-naveen/customer-churn-prediction",
    demoUrl: "https://github.com/jxnaveen-naveen/customer-churn-prediction",
    metrics: [
      { label: "Model Accuracy", value: "88.5%" },
      { label: "ROC-AUC Score", value: "0.91" },
      { label: "Recall Rate", value: "84.2%" },
    ],
    caseStudy: {
      problem: "Businesses face recurring revenue loss due to customer churn. Identifying high-risk accounts prior to cancellation is critical for customer retention teams.",
      dataset: "Customer dataset containing 7,043 customer records with 21 attributes including tenure, monthly charges, total charges, contract type, payment method, and service add-ons.",
      dataCleaning: [
        "Handled missing values in TotalCharges by imputing median values based on tenure clusters.",
        "Encoded categorical variable features using One-Hot Encoding and Label Encoding.",
        "Scaled continuous features using RobustScaler to eliminate outlier distortion.",
        "Applied SMOTE to balance class distribution."
      ],
      eda: [
        "Discovered month-to-month contract holders have a significantly higher churn rate.",
        "Analyzed tenure impact: churn drops sharply after 12 months.",
        "Identified electronic payment methods correlated with higher churn rate."
      ],
      methodology: "Trained classification algorithms (Logistic Regression, Random Forest, XGBoost) and optimized hyperparameters using Scikit-Learn.",
      toolsUsed: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      keyInsights: [
        "Tenure and Contract Type are the top predictors of customer retention.",
        "Customers with security add-ons had significantly higher retention rates."
      ],
      visualizations: [
        "Feature Importance Bar Chart highlighting top predictors.",
        "Confusion Matrix & ROC-AUC Curve."
      ],
      recommendations: [
        "Incentivize month-to-month contract transitions to annual plans.",
        "Bundle key security add-ons into base subscription tiers."
      ],
      results: "Built a reliable 88.5% accurate predictive model flagging 84% of true churn cases before cancellation."
    }
  },
  {
    id: "sales-bi-dashboard",
    title: "Sales & Business Intelligence Dashboard",
    subtitle: "Power BI + SQL + Excel + DAX",
    description: "Executive business intelligence solution designed to monitor key financial KPIs, product segment margins, and regional sales dynamics.",
    technologies: ["Power BI", "DAX", "SQL", "Excel", "Power Query"],
    githubUrl: "https://github.com/jxnaveen-naveen/sales-bi-dashboard",
    demoUrl: "https://github.com/jxnaveen-naveen/sales-bi-dashboard",
    metrics: [
      { label: "KPI Indicators", value: "12 Live Cards" },
      { label: "Data Volume", value: "50,000+ Rows" },
      { label: "Report Latency", value: "<1 Second" },
    ],
    caseStudy: {
      problem: "Stakeholders lacked a unified view of sales performance, preventing real-time tracking of revenue growth and product margins.",
      dataset: "Enterprise Sales Database encompassing Sales Fact tables, Customer, Product, and Territory dimension models.",
      dataCleaning: [
        "Built star-schema data modeling relationships in Power BI Desktop.",
        "Created dynamic DAX measures for YoY Growth and QTD Sales.",
        "Cleaned address codes via Power Query transformations."
      ],
      eda: [
        "Uncovered regional variances and top product category margins.",
        "Evaluated monthly seasonal trends across quarters."
      ],
      methodology: "Transformed datasets using SQL subqueries and Power Query; engineered DAX metrics for interactive Power BI dashboards.",
      toolsUsed: ["Power BI", "DAX", "SQL", "Power Query", "Excel"],
      keyInsights: [
        "Online channels expanded YoY profit margins significantly.",
        "Top product SKUs drove the majority of gross profit."
      ],
      visualizations: [
        "Executive KPI Overview Cards.",
        "Waterfall Chart for YoY Revenue Variance."
      ],
      recommendations: [
        "Reallocate digital marketing budget toward direct-to-consumer channels.",
        "Automate daily data refreshes."
      ],
      results: "Streamlined executive reporting cycle to instantaneous automated dashboards."
    }
  }
];
