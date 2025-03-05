import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVarience = cva("", {
  variants: {
    size: {
      default: "h-9 w-9",
      xs: "h4 w-4",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
      xl: "h-[160px] w-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVarience> {
  imgUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}
const UserAvatar = ({
  imgUrl,
  name,
  className,
  onClick,
  size,
}: UserAvatarProps) => {
  return (
    <Avatar
      className={cn(avatarVarience({ size, className }))}
      onClick={onClick}
    >
      <AvatarImage src={imgUrl} alt={name} />
    </Avatar>
  );
};

export default UserAvatar;
