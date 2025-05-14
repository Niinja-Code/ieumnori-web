import S from "./styles.module.scss";

const Assist = () => {
  return (
    <div className={S.pageContainer}>
      <h2 className={S.pageTitle}>서비스 후원하기</h2>
      <p className={S.content}>
        안녕하세요.
        <br />
        이음노리 서비스를 개발 중인 팀 닌자입니다.
        <br />
        저희는 더 나은 서비스의 개발을 위해 열심히 노력하고 있습니다.
        <br />
        <br />
        저희의 꿈을 함께해 주실 수 있다면, 작은 후원이라도 큰 힘이 됩니다.
        <br />
        여러분의 후원금은 서비스 개발에 소중하게 사용되며, 더 나은 사용자 경험을
        제공하기 위한 데에 기여할 것입니다.
        <br />
        <br />
        후원은 자발적이며, 어떤 금액도 감사히 받겠습니다.
        <br />
        후원해 주신 분들께 감사의 인사를 올리며, 사회적 문제해결을 위해 더욱
        노력하는 팀 닌자가 되겠습니다.
        <br />
        여러분의 소중한 후원으로 저희와 함께 성장해 주세요.
        <br />
        <br />
        감사합니다.
      </p>
    </div>
  );
};

export default Assist;
