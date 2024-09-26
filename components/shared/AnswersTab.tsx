import { getUserAnswers } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';
import AnswerCard from '../card/AnswerCard';
import Pagination from '@/components/shared/Pagination';

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
}

const AnswersTab = async ({ searchParams, userId, clerkId }: Props) => {
  const result = await getUserAnswers({
    userId,
    page: searchParams.page ? +searchParams.page : 1,
  })

  // console.log("i am answer", result.answers)

  return (
    <>
      {result.answers.map((item) => (
        <AnswerCard 
          key={item._id}
          clerkId={clerkId}
          _id={item._id}
          question={item.question}
          author={item.author}
          upvotes={item.upvotes.length}
          createdAt={item.createdAt}
        />  
      ))}
      <div className="mt-4">
        <Pagination 
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={true}
          // result.isNext => Resolve this issue
        />
      </div>
    </>
  )
}

export default AnswersTab