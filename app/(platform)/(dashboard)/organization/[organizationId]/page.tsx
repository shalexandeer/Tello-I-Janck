import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
  const {} = auth();

  return <div>Organization Page!</div>;
};

export default OrganizationIdPage;
