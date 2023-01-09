import { useRouter } from "next/router";
import Project from "../../components/Launchpad/Project/Project";
import ProjectDetails from "../projectdetails";

const ProjectWithId = ({ address, signer }) => {
  const router = useRouter();
  const { id } = router.query;

  return id ? (
    <ProjectDetails id={id} address={address} signer={signer} />
  ) : null;
};

export default ProjectWithId;
