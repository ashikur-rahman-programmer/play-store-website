import AppDetails from "@/components/AppDetails/AppDetails";

const AppId = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/AppsData.json");
  const apps = await res.json();

  const appsData = apps.find((app) => app.id === parseInt(id));

  return (
    <div className="container mx-auto py-20 bg-gray-100">
      <AppDetails appsData={appsData} />
    </div>
  );
};

export default AppId;
