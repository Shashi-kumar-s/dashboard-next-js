import Login from "./login/page";

export default function Home() {
  console.log(process.env);
  return (
    <main>
      <Login />
    </main>
  )
}
