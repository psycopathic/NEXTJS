import axios from "axios";

async function getUserDetails() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

//async component
export default async function Home() {
  const data = await getUserDetails();
  return (
    <>
      <div className="flex flex-col justify-center h-screen ">
        <div className="flex justify-center">
          <div className="border p-8 rounded">
            <div>
              <pre>Name :{data.name}</pre>{" "}
            </div>
            <pre>Email :{data.email}</pre>
          </div>
        </div>
      </div>
    </>
  );
}
