export default function Page({ params }: { params: { id: string } }) {
  const userEmail = params.id;

  return (
    <div>My profile: {userEmail.substring(0, userEmail.indexOf("%"))}</div>
  );
}
