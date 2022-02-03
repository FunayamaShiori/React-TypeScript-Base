export const Practice4 = () => {
  //引数に型の指定なし：文字列'1000'でも数値型に変換してくれる
  // const calcTotalFee = (num) => {
  //   const total = num * 1.1;
  //   console.log(total);
  // };

  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
