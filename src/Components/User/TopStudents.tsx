import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AllUserInterface, LogedUserInterface } from '@/Interfaces/InterFaces';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchAllUsers } from '@/lib/Actions/UserActions';

export default function TopUsersTabel() {
  const { UserLogedData } = useAppSelector((state) => state.user) as unknown as { UserLogedData: LogedUserInterface };
  const { AllUsers } = useAppSelector((state) => state.user) as unknown as {
    AllUsers: { User: AllUserInterface[] };
  };
  const [AllStudentsDegree, setAllStudentsDegree] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  //Get all students from the First Time
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);
  //Set All  Users Final Degree
  useEffect(() => {
    if (AllUsers?.User?.length > 0) {
      setAllStudentsDegree(AllUsers?.User?.map((user) => +((user?.AssinmentResult?.length && user?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((user?.ExamResult?.length && user?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) || 0)));
    }
  }, [AllUsers]);
  return (
    <>
      {/*Show Only Top Students */}
      <div className='table  w-full overflow-x-scroll  justify-center items-center border-green-500 border-2'>
        <div className='table-header-group  bg-green-200 text-blue-600'>
          <span className='table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm'>م</span>
          <span className='table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm'>الاسم</span>
          <span className='text-center line-clamp-2 p-1 border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell'>المجموعة</span>
          <span className='text-center line-clamp-2 p-1 border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell'>عدد التكليفات</span>
          <span className='table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm'>درجات التكليفات</span>
          <span className='table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm'>درجات الامتحانات</span>
          <span className='table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm'>إجمالي الدرجات</span>
          <span className='table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm'>ترتيب الطالب</span>
        </div>
        {AllUsers?.User?.length > 0 &&
          AllStudentsDegree?.length > 0 &&
          AllUsers?.User?.filter(
            (user) =>
              AllStudentsDegree?.sort((a, b) => a - b)
                .reverse()
                .indexOf(+((user?.AssinmentResult?.length && user?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((user?.ExamResult?.length && user?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) || 0)) +
                1 <= 7
          ).filter(a=>+((a?.AssinmentResult?.length && a?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((a?.ExamResult?.length && a?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)))!==0)
        //   ?.sort((a, b) => +((a?.AssinmentResult?.length && a?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((a?.ExamResult?.length && a?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr))) - 
        //   +((b?.AssinmentResult?.length && b?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((b?.ExamResult?.length && b?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) )
        // ).reverse()
        .sort((a, b) => +((a?.AssinmentResult?.length && a?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((a?.ExamResult?.length && a?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) || 0) - +((b?.AssinmentResult?.length && b?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((b?.ExamResult?.length && b?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) || 0))
            ?.map((user, index: number) => {
              const UserRank =
                AllStudentsDegree?.sort((a, b) => a - b)
                  .reverse()
                  .indexOf(+((user?.AssinmentResult?.length && user?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((user?.ExamResult?.length && user?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) || 0)) + 1;
              return (
                <div key={index} className='table-row-group '>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}>{index + 1}</span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}>
                    <Link className='bg-transparent flex flex-col w-full border-none items-center hover:text-orange-600 hover:font-bold transition-all cursor-pointer' href={`/${UserLogedData?.path}/dashboard/students/details/${user?.id}`}>
                      {user?.name}{' '}
                    </Link>{' '}
                  </span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} text-center p-1 border-t border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell`}>
                    <Link className='bg-transparent flex flex-col border-none hover:text-orange-600 hover:font-bold transition-all items-center cursor-pointer' href={`/${UserLogedData?.path}/dashboard/groups/details/${user?.Groups?.id}`}>
                      {user?.Groups?.name}{' '}
                    </Link>
                  </span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} text-center p-1 border-t border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell`}> {user?.AssinmentResult?.length}</span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}> {user?.AssinmentResult?.length && user?.AssinmentResult?.map((el) => +el?.score)?.reduce((acc, cur) => acc + cur)}</span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}> {user?.ExamResult?.length && user?.ExamResult?.map((e) => +e.score)?.reduce((acc, cur) => acc + cur)}</span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}>
                    {' '}
                    {+((user?.AssinmentResult?.length && user?.AssinmentResult?.map((e) => +e.score).reduce((acc, cur) => acc + cur)) || 0) + +((user?.ExamResult?.length && user?.ExamResult?.map((e) => +e?.score).reduce((acc, curr) => acc + curr)) || 0)}
                  </span>
                  <span className={`${index % 2 == 0 ? 'bg-green-50 text-green-700' : 'bg-green-100 text-blue-800'} table-cell text-center p-1 border-t border-l border-blue-500 text-sm ${UserRank === 1 && 'text-green-500'}`}>
                    {' '}
                    {UserRank === 1 ? 'الأول' : UserRank === 2 ? 'الثاني' : UserRank === 3 ? 'الثالث' : UserRank === 4 ? 'الرابع' : UserRank === 5 ? 'الخامس' : UserRank === 6 ? 'السادس' : UserRank === 7 ? 'السابع' : UserRank}
                  </span>
                </div>
              );
            })
            
            }
      </div>
    </>
  );
}
