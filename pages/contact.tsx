import Seo from "../components/seo";

export default function Contact() {
    return (
        <>
          <Seo title="Contact" description="お問い合わせ" />
          <h2>お問い合わせ</h2>

          <p>フォームでのお問い合わせが、ご希望の方は<a className="contact__link" href="https://forms.gle/CarN3m3MEdgpKaw1A">こちら</a>にて受け付けております。</p>
          <p>メールでのお問い合わせは<a className="contact__link" href="mailto:mc-fdc@tuna2134.jp">mc-fdc@tuna2134.jp</a>にて受け付けております。</p>
        </>
    )
}