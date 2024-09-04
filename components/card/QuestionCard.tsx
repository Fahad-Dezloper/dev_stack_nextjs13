import Link from 'next/link';
import React from 'react'
import RenderTags from '../shared/RenderTags';
import Metric from '../shared/Metric';
import { formatNumber, getTimestamp } from '@/lib/utils';
// import getTimestamp from ''

interface Props {
  id: string;
  title: string;
  tags: {
    _id: number;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  }[];
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({id, title, tags, author, upvotes, views, answers,createdAt}: Props) => {
  return (
    <div className='rounded-[10px] p-9 sm:px-11'>
      <div className='flex flex-col-reverse items-start justify-between gap-5 sm:flex-row'>
        <div>
          <span className='subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden'>{getTimestamp(createdAt)}</span>
          <Link href={`/question/${id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">{title}</h3>
          </Link>
        </div>
        {/* if signed in add edit delete actions */}
      </div>

      <div className='mt-3.5 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <RenderTags key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className='flex-between mt-6 w-full flex-wrap gap-3'>
        <Metric
          imgUrl={author.picture}
          alt="user"
          value={author[0].name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyle="body-medium text-dark400_light700"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumber(upvotes)}
          title=" Votes"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumber(answers.length)}
          title=" Answers"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(views)}
          title=" Views"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
    </div>
  )
}

export default QuestionCard