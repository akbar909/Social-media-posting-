import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  // If image is a Cloudinary public_id, construct the Cloudinary URL
  const cloudinaryBase = "https://res.cloudinary.com/" + process.env.REACT_APP_CLOUDINARY_CLOUD_NAME + "/image/upload/";
  const isCloudinary = image && (image.includes("user_pictures/") || image.includes("post_pictures/"));
  const src = isCloudinary
    ? `${cloudinaryBase}${image}`
    : `https://social-media-posting-backend.vercel.app/assets/${image}`;
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={src}
      />
    </Box>
  );
};

export default UserImage;
