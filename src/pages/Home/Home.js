import React, { useContext } from "react";
import Card from "../../components/Shared/Card";
import blog from "../../assets/cover/blog.png";
import productDescription from "../../assets/cover/productDescription.png";
import coldEmail from "../../assets/cover/coldEmail.png";
import jobDescription from "../../assets/cover/jobDescription.png";
import social from "../../assets/cover/social.png";
import uniqueValue from "../../assets/cover/uniqueValue.png";
import headline from "../../assets/cover/headline.png";
import aida from "../../assets/cover/aida.png";
import career from "../../assets/cover/career.png";
import itSupport from "../../assets/cover/itSupport.png";
import doctor from "../../assets/cover/doctor.png";
import lawyer from "../../assets/cover/lawyer.png";
import chef from "../../assets/cover/chef.png";
import dreamer from "../../assets/cover/dreamer.png";
import pas from "../../assets/cover/pas.png";
import psychologist from "../../assets/cover/psychologist.png";
import assistant from "../../assets/cover/assistant.png";
import financial from "../../assets/cover/financial.png";
import { AiContext } from "../../contexts/AiContext";

const Home = () => {
  const { setOutput } = useContext(AiContext);
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  const moduleList = [
    {
      moduleName: "Personal Assistant",
      moduleDescription: "Your very own personal assistant at your service.",
      moduleRoute: "/assistant",
      img: assistant,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Cold Email",
      moduleDescription: "Generate cold email templates instantly.",
      moduleRoute: "/cold",
      img: coldEmail,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Ai Financial",
      moduleDescription: "Your very own personal assistant at your service.",
      moduleRoute: "/financial",
      img: financial,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Blog Writting",
      moduleDescription: "Write SEO friendly blogs that people actually reads.",
      moduleRoute: "/blog",
      img: blog,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Job Description",
      moduleDescription: "Generate job descriptions using AI assistant.",
      moduleRoute: "/job",
      img: jobDescription,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Social Media Adverts",
      moduleDescription: "Write engaging social media adverts to boost sales.",
      moduleRoute: "/social",
      img: social,
      resetOutput: resetOutput,
    },
    {
      moduleName: "UVP Framework",
      moduleDescription: "Know the selling points of your product/service.",
      moduleRoute: "/unique",
      img: uniqueValue,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Headline & Description",
      moduleDescription: "Create engaging headline & description",
      moduleRoute: "/headlines",
      img: headline,
      resetOutput: resetOutput,
    },
    {
      moduleName: "AIDA Framework",
      moduleDescription: "The best AI powered AIDA Framework.",
      moduleRoute: "/aida",
      img: aida,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Product Description",
      moduleDescription: "Generate unique product descriptions.",
      moduleRoute: "/product",
      img: productDescription,
      resetOutput: resetOutput,
    },
    {
      moduleName: "IT Support",
      moduleDescription: "Your IT expert AI for any IT assistance.",
      moduleRoute: "/itsupport",
      img: itSupport,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Ai Lawyer",
      moduleDescription: "Your own AI powered lawyer at your service.",
      moduleRoute: "/lawyer",
      img: lawyer,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Career Counselor",
      moduleDescription: "Your on-hand career counselor.",
      moduleRoute: "/career",
      img: career,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Ai Doctor",
      moduleDescription: "Consult medical issues with the Ai Doctor.",
      moduleRoute: "/doctor",
      img: doctor,
      resetOutput: resetOutput,
    },

    {
      moduleName: "Problem-Agitate-Solution",
      moduleDescription: "Get quick but in-depth Problem-Agitate-Solutions.",
      moduleRoute: "/pas",
      img: pas,
      resetOutput: resetOutput,
    },

    {
      moduleName: "Personal Chef",
      moduleDescription: "Make something new with AI chef.",
      moduleRoute: "/chef",
      img: chef,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Dream Interpreter",
      moduleDescription: "Come find out what your dreams actually mean.",
      moduleRoute: "/dreamer",
      img: dreamer,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Personal Psychologist",
      moduleDescription: "Get some peace of mind here with the expert.",
      moduleRoute: "/psychologist",
      img: psychologist,
      resetOutput: resetOutput,
    },
  ];

  return (
    <section className="max-w-11/12 mx-auto my-0 p-4">
      {/* cards */}
      <div className="rounded-xl">
        <div className="text-center py-4 mb-8">
          <p className="text-4xl font-black">
            &#128075; Hey, what are we creating today?
          </p>
          <p className="opacity-70 pt-3">
            Get started by selecting the content type from the options below
          </p>
        </div>
        <p className="font-black text-center lg:text-left opacity-70 py-2">
          All Modules
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-5">
          {moduleList?.map((module, i) => {
            return <Card key={i} module={module}></Card>;
          })}
        </section>
      </div>
    </section>
  );
};

export default Home;
