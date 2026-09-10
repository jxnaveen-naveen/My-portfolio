import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Aurora } from "@/components/Background/Aurora";
import { Particles } from "@/components/Background/Particles";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Jerald Xavier | Data Analyst & Data Science Enthusiast",
  description:
    "Naveen Jerald Xavier is a Data Analyst and Data Science enthusiast specializing in Python, SQL, Power BI, Excel, data visualization, machine learning, and business intelligence.",
  keywords: [
    "Naveen Jerald Xavier",
    "Data Analyst",
    "Data Science Enthusiast",
    "Python Developer",
    "SQL Developer",
    "Power BI",
    "Business Intelligence",
    "Data Visualization",
    "Machine Learning",
    "Anna University",
    "Portfolio",
  ],
  authors: [{ name: "Naveen Jerald Xavier" }],
  creator: "Naveen Jerald Xavier",
  metadataBase: new URL("https://naveenjeraldxavier.dev"),
  openGraph: {
    title: "Naveen Jerald Xavier | Data Analyst & Data Science Enthusiast",
    description:
      "Transforming raw data into meaningful insights, interactive dashboards, and intelligent data-driven solutions.",
    url: "https://naveenjeraldxavier.dev",
    siteName: "Naveen Jerald Xavier Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Jerald Xavier | Data Analyst Portfolio",
    description:
      "Data Analyst & Data Science Enthusiast specializing in Python, SQL, Power BI, and Predictive Analytics.",
    creator: "@naveenjerald",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveen Jerald Xavier",
    jobTitle: "Data Analyst & Data Science Enthusiast",
    url: "https://naveenjeraldxavier.dev",
    sameAs: [
      "https://github.com/jxnaveen-naveen",
      "https://linkedin.com/in/naveenjeraldxavier",
      "https://youtube.com/@datawithnaveen",
    ],
    knowsAbout: [
      "Data Analytics",
      "Data Science",
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Machine Learning",
      "Business Intelligence",
      "PostgreSQL",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Anna University",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0B1120] text-white antialiased selection:bg-cyan-500 selection:text-black">
        {/* Background Visual Effects */}
        <Aurora />
        <Particles />
        
        {/* Main Content Area */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
