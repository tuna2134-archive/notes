import Seo from "../components/seo"

export default function privacyPolicy() {
  return (
    <>
      <Seo title="Privacy Policy" description="プライバシーポリシー" />
      <div className="privacy-policy">
        <div className="privacy-policy__item">
          <p className="privacy-policy__title">個人情報利用目的について</p>
          <p className="privacy-policy__text">
            notes(以下、当サイト)は、お問い合わせやコメント投稿の際に氏名・メールアドレス等の個人情報を入力いただく場合があります。
            取得した個人情報は、必要な連絡のみに利用させていただくもので、これらの目的以外では利用いたしません。
          </p>
        </div>
        <div className="privacy-policy__item">
          <p className="privacy-policy__title">個人情報の第三者開示について</p>
          <p className="privacy-policy__text">
            取得した個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。<br />
            ・本人の同意が得られた場合 <br />
            ・法令により開示が求められた場合
          </p>
        </div>
        <div className="privacy-policy__item">
          <p className="privacy-policy__title">Cookieの使用について</p>
          <p className="privacy-policy__text">
            当サイトでは、Googleなどの第三者配信事業者がCookieを使用して、広告を配信しております。<br />
            広告は主に、ユーザーの興味に応じたコンテンツを表示するために使用しております。
            パーソナライズ広告は、<a href="https://www.google.com/settings/ads">広告設定</a>で無効にできます。また
            <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>にアクセスすると、
            パーソナライズ広告に使われる第三者配信事業者のCookieを無効にできます。
          </p>
        </div>
        <div className="privacy-policy__item">
          <p className="privacy-policy__title">免責事項</p>
          <p className="privacy-policy__text">
            当サイトは、掲載内容によって生じた損害に対する一切の責任を負いません。<br />
            各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。<br />
            また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
          </p>
        </div>
      </div>
    </>
  )
}