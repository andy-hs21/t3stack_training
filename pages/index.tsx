import { signIn, signOut, useSession } from "next-auth/react";

const Home: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Welcome to T3 Stack Training</h1>
      {!session ? (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </>
      ) : (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default Home;
