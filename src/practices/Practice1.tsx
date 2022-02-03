export const Practice1 = () => {
  //引数に型の指定なし：文字列'1000'でも数値型に変換してくれる
  // const calcTotalFee = (num) => {
  //   const total = num * 1.1;
  //   console.log(total);
  // };

  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
