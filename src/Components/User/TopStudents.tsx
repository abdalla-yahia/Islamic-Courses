import { useEffect, useState } from "react";
import Link from "next/link";
import { AllUserInterface, LogedUserInterface } from "@/Interfaces/InterFaces";
import { useAppSelector } from "@/lib/hooks";

export default function TopUsersTabel({
  place
}: {
  place: { id: number; User: AllUserInterface[] };
}) {

  const { UserLogedData } = useAppSelector(
    (state) => state.user
  ) as unknown as { UserLogedData: LogedUserInterface };

  const [AllStudentsDegree, setAllStudentsDegree] = useState<number[]>([]);

  //Set All  Users Final Degree
  useEffect(() => {
    if (place?.User?.length > 0) {
      setAllStudentsDegree(
        place.User.map(
          (user) =>
            +(
              (user?.AssinmentResult?.length &&
                user?.AssinmentResult?.map((e) => +e.score).reduce(
                  (acc, cur) => acc + cur
                )) ||
              0
            ) +
            +(
              (user?.ExamResult?.length &&
                user?.ExamResult?.map((e) => +e?.score).reduce(
                  (acc, curr) => acc + curr
                )) ||
              0
            )
        )
      );
    }
  }, [place.User]);
    
  return (
    <>
        {/*Show Only Excelent Students */}
        <div className="table  w-full overflow-x-scroll  justify-center items-center border-green-500 border-2">
          <div className="table-header-group  bg-green-200 text-blue-600">
            <span className="table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm">
              م
            </span>
            <span className="table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm">
              الاسم
            </span>
            <span className="text-center line-clamp-2 p-1 border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell">
              المجموعة
            </span>
            <span className="text-center line-clamp-2 p-1 border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell">
              عدد التكليفات
            </span>
            <span className="table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm">
              درجات التكليفات
            </span>
            <span className="table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm">
              درجات الامتحانات
            </span>
            <span className="table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm">
              إجمالي الدرجات
            </span>
            <span className="table-cell text-center line-clamp-2 p-1 border-l border-blue-500 text-sm">
              ترتيب الطالب
            </span>
          </div>
          {place?.User?.length > 0 &&
            AllStudentsDegree?.length > 0 &&
            place?.User?.filter(
              (user) =>
                AllStudentsDegree?.toReversed().indexOf(
                  +(
                    (user?.AssinmentResult?.length &&
                      user?.AssinmentResult?.map((e) => +e.score).reduce(
                        (acc, cur) => acc + cur
                      )) ||
                    0
                  ) +
                    +(
                      (user?.ExamResult?.length &&
                        user?.ExamResult?.map((e) => +e?.score).reduce(
                          (acc, curr) => acc + curr
                        )) ||
                      0
                    )
                ) +
                  1 <=
                7
            )
              ?.toReversed()
              ?.map((user, index: number) => {
                const UserRank =
                  AllStudentsDegree?.toReversed().indexOf(
                    +(
                      (user?.AssinmentResult?.length &&
                        user?.AssinmentResult?.map((e) => +e.score).reduce(
                          (acc, cur) => acc + cur
                        )) ||
                      0
                    ) +
                      +(
                        (user?.ExamResult?.length &&
                          user?.ExamResult?.map((e) => +e?.score).reduce(
                            (acc, curr) => acc + curr
                          )) ||
                        0
                      )
                  ) + 1;
                return (
                  <div key={index} className="table-row-group ">
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}
                    >
                      <Link
                        className="bg-transparent flex flex-col w-full border-none items-center hover:text-orange-600 hover:font-bold transition-all cursor-pointer"
                        href={`/${UserLogedData?.path}/dashboard/students/details/${user?.id}`}
                      >
                        {user?.name}{" "}
                      </Link>{" "}
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } text-center p-1 border-t border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell`}
                    >
                      <Link
                        className="bg-transparent flex flex-col border-none hover:text-orange-600 hover:font-bold transition-all items-center cursor-pointer"
                        href={`/${UserLogedData?.path}/dashboard/groups/details/${user?.Groups?.id}`}
                      >
                        {user?.Groups?.name}{" "}
                      </Link>
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } text-center p-1 border-t border-l border-blue-500 text-sm hidden md:table-cell lg:table-cell`}
                    >
                      {" "}
                      {user?.AssinmentResult?.length}
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}
                    >
                      {" "}
                      {user?.AssinmentResult?.length &&
                        user?.AssinmentResult?.map((el) => +el?.score)?.reduce(
                          (acc, cur) => acc + cur
                        )}
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}
                    >
                      {" "}
                      {user?.ExamResult?.length &&
                        user?.ExamResult?.map((e) => +e.score)?.reduce(
                          (acc, cur) => acc + cur
                        )}
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } table-cell text-center p-1 border-t border-l border-blue-500 text-sm`}
                    >
                      {" "}
                      {+(
                        (user?.AssinmentResult?.length &&
                          user?.AssinmentResult?.map((e) => +e.score).reduce(
                            (acc, cur) => acc + cur
                          )) ||
                        0
                      ) +
                        +(
                          (user?.ExamResult?.length &&
                            user?.ExamResult?.map((e) => +e?.score).reduce(
                              (acc, curr) => acc + curr
                            )) ||
                          0
                        )}
                    </span>
                    <span
                      className={`${
                        index % 2 == 0
                          ? "bg-green-50 text-green-700"
                          : "bg-green-100 text-blue-800"
                      } table-cell text-center p-1 border-t border-l border-blue-500 text-sm ${
                        UserRank === 1 && "text-green-500"
                      }`}
                    >
                      {" "}
                      {UserRank === 1
                        ? "الأول"
                        : UserRank === 2
                        ? "الثاني"
                        : UserRank === 3
                        ? "الثالث"
                        : UserRank === 4
                        ? "الرابع"
                        : UserRank === 5
                        ? "الخامس"
                        : UserRank === 6
                        ? "السادس"
                        : UserRank === 7
                        ? "السابع"
                        : UserRank}
                    </span>
                  </div>
                );
              })}
        </div>
      
    </>
  );
}
