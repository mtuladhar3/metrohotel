// src/components/home/cta/VideoBackground.tsx
'use client';

const POSTER_URL =
  'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69a81f397484787f49c3f55e_7385122-uhd_3840_2160_30fps_poster.0000000.jpg';

const MP4_URL =
  'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69a81f397484787f49c3f55e_7385122-uhd_3840_2160_30fps_mp4.mp4';

const WEBM_URL =
  'https://cdn.prod.website-files.com/69833b76e5b4bee55e873012%2F69a81f397484787f49c3f55e_7385122-uhd_3840_2160_30fps_webm.webm';

export default function VideoBackground() {
  return (
    <div className="image-bg_cta-v2 absolute inset-0 z-0 overflow-hidden w-full h-full opacity-[0.09] brightness-[200%]">
      <div
        data-poster-url={POSTER_URL}
        data-video-urls={`${MP4_URL},${WEBM_URL}`}
        data-autoplay="true"
        data-loop="true"
        data-wf-ignore="true"
        className="video_cover w-background-video w-background-video-atom relative w-full h-full"
      >
        <video
          id="05d9803d-727d-df6d-69cc-86dbcdb20b3a-video"
          autoPlay
          loop
          muted
          playsInline
          data-wf-ignore="true"
          data-object-fit="cover"
          poster={POSTER_URL}
          style={{
            backgroundImage: `url("${POSTER_URL}")`,
          }}
          className="w-full h-full object-cover bg-cover bg-center"
        >
          <source src={MP4_URL} type="video/mp4" />
          <source src={WEBM_URL} type="video/webm" />
        </video>
      </div>

      {/* Light Backdrop Overlay for Content Contrast */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />
    </div>
  );
}