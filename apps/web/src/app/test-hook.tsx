// 의도적으로 ESLint 에러를 발생시키는 파일
export default function TestHook() {
  const unusedVar = "사용되지 않는 변수";
  
  return (
    <div>
      <h1>테스트</h1>
    </div>
  );
}
