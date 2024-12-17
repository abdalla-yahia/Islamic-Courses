import Accordion from "react-bootstrap/Accordion";
import QuestionsPage from "../Questions/QuestionsPage";
import Link from "next/link";
import TimerQuestions from "../Questions/TimerQuestions";
import style from "./style.module.css";
import AssinmentHook from "./AssinmentHook";
import AssinmentResultTable from "./AssinmentResultTable";
import { AllAssinmentInterface } from "@/Interfaces/InterFaces";

export default function AssinmentInfo({
  Assinment,
}: {
  Assinment: AllAssinmentInterface;
}) {
  const {
    AssinmentResult,
    answers,
    setAnswers,
    DetailsToggle,
    setDetailsToggle,
    toggle,
    setToggle,
    toggleAssinment,
    setToggleAssinment,
    UserDegree,
    FullDegree,
    OpenAssinment,
    SendAnswersHandeller,
  } = AssinmentHook({ Assinment });
  return (
    <>
      {Assinment && (
        <div className="w-full">
          <h2 className="text-center flex gap-2 text-xl my-3 font-bold text-gray-900">
            معلومات عن التكليف:
            <p className="font-bold text-red-500">{Assinment.description} </p>
          </h2>
          <h2 className="text-center flex gap-2 text-xl my-3 font-bold text-gray-900">
            الطلاب المشتركين في التكليف:
            <p className="font-bold text-slate-500">
              {Assinment?.User?.length} طالب/طالبة
            </p>
          </h2>
          <h2 className="text-center flex gap-2 text-xl my-3 font-bold text-gray-900">
            {" "}
            مدرس المادة:
            <p className="font-bold text-green-800">
              <Link
                className="font-bold"
                href={`../../teachers/details/${Assinment?.teacher?.id}`}
              >
                {Assinment?.teacher?.name}{" "}
              </Link>{" "}
            </p>
          </h2>
          <h2 className="text-center flex gap-2 text-xl my-3 font-bold text-gray-900">
            {" "}
            تكليف المحاضرة :
            <p className="font-bold text-slate-500">
              {Assinment?.Lessons?.name}
            </p>
          </h2>
          <h2 className="text-center flex gap-2 text-xl my-3 font-bold text-gray-900">
            {" "}
            مادة التكليف :
            <p className="font-bold text-slate-500">
              {Assinment?.Subjects?.name}
            </p>
          </h2>
          {toggleAssinment && (
            <div className="w-full flex-col">
              {Assinment?.assinmentbody?.time && (
                <span
                  className={`${
                    toggle ? "hidden" : "block"
                  } my-1 text-blue-600`}
                >
                  <span className="text-red-700">ملحوظة:</span> يوجد مؤقت زمني
                  لللإختبار يبدأ بمجرد الضغط على زر فتح الإختبار
                </span>
              )}
              <button
                onClick={() => {
                  setToggle(true);
                  OpenAssinment();
                }}
                className={`${
                  toggle ? "hidden" : "block"
                } rounded text-xl p-2 w-full bg-green-700 cursor-pointer`}
              >
                اضغط لفتح الإختبار
              </button>
            </div>
          )}
          {toggle && (
            <>
              <div className="text-center flex flex-col w-full gap-2 text-xl my-3 font-bold text-gray-900">
                <p className="text-3xl text-red-500 shadow p-2"> الإمتحان </p>

                {Assinment?.assinmentbody?.time && (
                  <TimerQuestions
                    houres={Assinment?.assinmentbody?.time?.hours}
                    minutes={Assinment?.assinmentbody?.time?.minutes}
                    seconds={Assinment?.assinmentbody?.time?.seconds}
                    setToggle={
                      setToggle as unknown as React.Dispatch<
                        React.SetStateAction<boolean>
                      >
                    }
                    setToggleAssinment={
                      setToggleAssinment as unknown as React.Dispatch<
                        React.SetStateAction<boolean>
                      >
                    }
                    SendAnswersHandeller={SendAnswersHandeller}
                  />
                )}
                <span>
                  الدرجة الكلية للتكليف :{" "}
                  <span className="text-red-500 font-bold">{FullDegree} </span>
                  درجة
                </span>
                <div className="font-bold text-blue-500 shadow-lg py-3 shadow-orange-500">
                  {Assinment?.assinmentbody?.questions?.map((e, i) => {
                    return (
                      <>
                        <Accordion key={i}>
                          <Accordion defaultActiveKey="0">
                            <QuestionsPage
                              type={e.type}
                              id={e.id}
                              question={e.question}
                              choase={e.choase}
                              degree={e.degree}
                              answers={answers}
                              setAnswers={setAnswers}
                            />
                          </Accordion>
                        </Accordion>
                      </>
                    );
                  })}{" "}
                </div>
              </div>
              {Assinment?.assinmentbody?.questions &&
              +Assinment?.assinmentbody?.questions?.length > +answers.length ? (
                <span className="text-red-800">
                  تنبيه: يوجد عدد{" "}
                  <span className="font-bold text-blue-600">
                    {+Assinment?.assinmentbody?.questions?.length -
                      +answers.length}{" "}
                  </span>
                  سؤال لم يتم إجابته!!
                </span>
              ) : (
                <span className="text-green-700">
                  تمت الإجابة على كل الأسأله
                </span>
              )}
              {answers?.length ===
                Assinment?.assinmentbody?.questions?.length && (
                <button
                  onClick={() => {
                    SendAnswersHandeller();
                    setToggle(false);
                    setToggleAssinment(false);
                  }}
                  className="w-full my-3 bg-green-600 p-3 rounded shadow hover:bg-red-700"
                >
                  إرسال الإجابات
                </button>
              )}
            </>
          )}
          {!toggleAssinment && (
            <div className="w-full gap-2 flex">
              <h1 className="font-bold flex justify-center items-center gap-2">
                درجتك فى التكليف :
              </h1>
              <span className="text-green-600 font-bold ">
                <span className="font-bold text-2xl text-red-700">
                  {UserDegree}
                </span>
                درجة
              </span>
            </div>
          )}
        </div>
      )}
      {!Assinment && AssinmentResult && (
        <>
          <div className="w-full   flex items-start justify-center">
            <div className="flex gap-3 flex-col md:flex-row lg:flex-row justify-center items-center font-bold text-2xl">
              <h1 className="text-red-600">درجتك فى هذا التكليف : </h1>
              <h2 className="text-blue-600  ">
                {AssinmentResult?.score}
                <span className="text-gray-600">درجة</span>
              </h2>
              {AssinmentResult?.answersbody !== null && (
                <span
                  className="cursor-pointer hover:text-red-600 transition-colors"
                  onClick={() => setDetailsToggle(!DetailsToggle)}
                >
                  عرض {DetailsToggle ? "أقل" : "المزيد"}
                  <span className={style.span_toggle}>
                    <span className={` ${style.span_toggle}`}>.</span>
                    <span className={` ${style.span_toggle}`}>.</span>
                    <span className={` ${style.span_toggle}`}>.</span>
                  </span>
                </span>
              )}
            </div>
          </div>
          {DetailsToggle && <AssinmentResultTable sorce={AssinmentResult} />}
        </>
      )}
    </>
  );
}
