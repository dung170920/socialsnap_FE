import { Button } from "@/components";
import { useStyles } from "./NotFound.styles";
import { useNavigate } from "react-router-dom";
import { path } from "@/constants";

const NotFound = () => {
  const navigate = useNavigate();
  const { styles } = useStyles();
  return (
    <section className={styles.notFound}>
      <h1 className={styles.header}>404</h1>
      <div className={styles.label}>Page Not Found</div>
      <Button type="primary" onClick={() => navigate(`/${path.home}`)}>
        Go Home
      </Button>
    </section>
  );
};

export default NotFound;
