import CareerJob from "../components/careerJob";
import WayWorking from "../components/wayWorking";

export default function Jobs() {
  return (
    <>
      <div className="container">
        <h1 className="text-7xl font-bold my-8 ">Jobs</h1>
        <CareerJob />
      </div>
      <div className="w-full h-0.0625 bg-ikea-divider my-16" />
      <WayWorking />
    </>
  );
}
