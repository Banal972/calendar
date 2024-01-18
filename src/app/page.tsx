"use client"

export default function Home() {
  return (
    <div className="_login">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="아이디를 입력해주세요"/>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <button type="submit">로그인</button>
      </form>
      <div className="btn_list">
        <button className="naver"><img src="/images/naver_btn.png" alt="" /></button>
        <button className="kakao"><img src="/images/kakao_btn.png" alt="" /></button>
      </div>
    </div>
  )
}
