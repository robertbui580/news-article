export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-500"></div>
    </div>
  );
};
