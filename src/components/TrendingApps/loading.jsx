import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <HashLoader color="#8b5cf6" />
      </div>
    </div>
  );
}
