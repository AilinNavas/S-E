export const VideoSection = ({
  title = "El Dr. Horn Explica Nuestro Procedimiento",
  subtitle = "Mire estos breves videos para conocer más sobre nuestro proceso y resolver sus dudas.",
  video1Src,
  video2Src,
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#0a2a54] text-center font-zen uppercase font-semibold text-3xl md:text-5xl pb-8">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl font-inter text-center lg:text-center pb-8">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Video 1 */}
          <div className="w-full max-w-[320px] aspect-9/16 rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              src={video1Src}
              controls
              playsInline
              controlsList="nofullscreen nodownload"
              disablePictureInPicture
             preload="auto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video 2 */}
          <div className="w-full max-w-[320px] aspect-9/16 rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              src={video2Src}
              controls
              controlsList="nofullscreen nodownload"
              disablePictureInPicture
              playsInline
               preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};