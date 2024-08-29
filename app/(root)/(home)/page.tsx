
import QuestionCard from '@/components/card/QuestionCard'
import HomeFilters from '@/components/home/HomeFilters'
import Filter from '@/components/shared/Filter'
import NoResult from '@/components/shared/NoResult'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import { Button } from '@/components/ui/button'
import { HomePageFilters } from '@/constants/filter'
import { Description } from '@radix-ui/react-dialog'
import Link from 'next/link'
import React from 'react'
const Home = () => {
  const questions = [
  {
    id: '1',
    title: 'Redux Toolkit Not Updating State as Expected',
    tags: [
      { _id: '1', name: 'React.JS' },
      { _id: '2', name: 'Redux' }
    ],
    author: [
      {
        _id: '1',
        name: 'John Doe',
        picture: 'https://randomuser.me/api/portraits/men/1.jpg'
      }
    ],
    upvotes: 10,
    views: 100,
    answers: [], // You can add answer objects here as needed
    createdAt: new Date('2024-09-01T12:00:00Z')
  },
  {
    id: '2',
    title: 'Async/Await Function Not Handling Errors Properly',
    tags: [{ _id: '3', name: 'JavaScript' }],
    author: [
      {
        _id: '2',
        name: 'Sujata',
        picture: 'https://randomuser.me/api/portraits/women/2.jpg'
      }
    ],
    upvotes: 15,
    views: 10,
    answers: [], // You can add answer objects here as needed
    createdAt: new Date('2024-06-16T12:00:00Z')
  }
];

  return (
    <>
      <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>All Questions</h1>

        <Link href="/ask-question" className='flex justify-end max-sm:w-full'>
          <Button className='primary-gradient min-h-[46px] px-
           py-6 !text-light-900'>Ask a Question</Button>
        </Link>
      </div>
      
      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>

        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 ?
          questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          )) : <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. one query could be the next big thing other learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />}
      </div>
    </>
  )
}

export default Home