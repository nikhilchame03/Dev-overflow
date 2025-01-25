import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "Cascading Delete in Sql Schema? Cascading Delete in Sql Schema?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" }
    ],
    author: {
      _id: "101",
      name: "John Doe",
      picture: "https://example.com/picture.jpg"
    },
    upvotes: 10000,
    views: 10000000,
    answers: [
      { content: "Answer 1", author: "Author 1" },
      { content: "Answer 2", author: "Author 2" }
    ],
    createdAt: new Date("2021-09-01")
  },
  {
    _id: "2",
    title: "Cascading Delete in Sql Schema?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" }
    ],
    author: {
      _id: "102",
      name: "Jane Smith",
      picture: "https://example.com/picture2.jpg"
    },
    upvotes: 15,
    views: 120,
    answers: [
      { content: "Answer 1", author: "Author 3" }
    ],
    createdAt: new Date("2021-09-05")
  },
  {
    _id: "3",
    title: "Cascading Delete in Sql Schema?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" }
    ],
    author: {
      _id: "103",
      name: "Alice Johnson",
      picture: "https://example.com/picture3.jpg"
    },
    upvotes: 8,
    views: 90,
    answers: [],
    createdAt: new Date("2021-09-10")
  }
];


const Home = () => {
  return (
    <>
      <div className="flex w-full  flex-col-reverse justify-between hap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>

        <Link href={"/ask-question"} className="">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900   ">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center  ">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="assets/icons/search.svg"
          placeholder="Search for Questions"
          otherClasses="flex-1"
        ></LocalSearchBar>

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]  "
          containerClasses="hidden max-md:flex  "
        ></Filter>
      </div>

      <HomeFilters></HomeFilters>

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) =>
          
          <QuestionCard key={question._id} _id={question._id} title={question.title}
            tags={question.tags} author={question.author} upvotes={question.upvotes}
             views={question.views} answers={question.answers} createdAt={question.createdAt}
          ></QuestionCard>
          )
        ) : (
          <NoResult  title="There's no questions to show"
          description="  Be the first to start the discussion.  Your query could spark a
        meaningful conversation, and one idea might lead to solving the next big
        thing!"
        link="/ask-question" LinkTitle="Ask a Question"
          ></NoResult>
        )}
      </div>
    </>
  );
};

export default Home;
