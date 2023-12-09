import { Breadcrumb } from "antd";

const CreatePost = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            href: "/",
            title: "Home",
          },
          {
            title: "Create Post",
          },
        ]}
      />
    </>
  );
};

export default CreatePost;
