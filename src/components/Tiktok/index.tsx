interface TiktokProps {
  data: {
    link: string;
  };
}

export const Tiktok = ({ data }: TiktokProps) => {
  return (
    <blockquote
      className="tiktok-embed"
      cite={data.link}
      data-video-id="7244557946305170694"
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
  );
};
