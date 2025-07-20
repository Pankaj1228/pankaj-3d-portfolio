const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-yellow-300">🎉 Thank You!</h1>
        <p className="text-lg">Your message has been sent successfully.</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink-400 to-blue-500 text-black rounded-full hover:scale-105 transition"
        >
          🔙 Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
