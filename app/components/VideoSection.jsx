export const VideoSection = ({
  title = "El Dr. Horn Explica Nuestro Procedimiento",
  subtitle = "Mire estos breves videos para conocer más sobre nuestro proceso y resolver sus dudas.",
  video1Src,
  video2Src,
}) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
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
             preload="auto"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Video 2 */}
          <div className="w-full max-w-[320px] aspect-9/16 rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              src={video2Src}
              controls
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