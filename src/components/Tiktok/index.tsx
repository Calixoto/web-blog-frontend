import Script from "next/script";

// "use client"
interface TiktokProps {
  data: {
    link: string;
  };
}
const regex = /\d+/;
export const Tiktok = ({ data }: TiktokProps) => {
  const linkId = data.link.match(regex);
  return (
    <>
      <Script async src="https://www.tiktok.com/embed.js"></Script>
      <blockquote
        className="tiktok-embed"
        cite={data.link}
        data-video-id={linkId?.[0]}
        data-autoplay="false"
        style={{ maxWidth: "305px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            title="@tiago.oliversan"
            href="https://www.tiktok.com/@tiago.oliversan?refer=embed"
          >
            @tiago.oliversan
          </a>
        </section>
      </blockquote>
    </>
  );
};
